from flask import Flask, request, session, redirect, url_for, render_template, flash
import psycopg2
import psycopg2.extras
import re
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'codoacodo'

DB_HOST = "localhost"
DB_NAME = "galeria_de_arte"
DB_USER = "postgres"
DB_PASS = "postgresMel"

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

@app.route('/')
def home():
    if 'logueado' in session:
        return redirect(url_for('/misobras.html'))
    return redirect(url_for('/index.html'))

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']

        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        account = cursor.fetchone()

        if account and check_password_hash(account['password'], password):
            session['logueado'] = True
            session['id'] = account['id']
            session['email'] = account['email']
            return redirect(url_for('profile'))
        else:
            flash('Credenciales incorrectas', 'error')

    return render_template('login.html')

@app.route('/crearusuario.html', methods=['GET', 'POST'])
def crearusuario():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    if request.method == 'POST' and 'nombre' in request.form and 'apellido' in request.form and 'email' in request.form and 'password' in request.form:
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        email = request.form['email']
        password = request.form['password']
        hashed_password = generate_password_hash(password)

        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        account = cursor.fetchone()

        if account:
            flash('La cuenta ya existe', 'error')
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            flash('Dirección de email inválida', 'error')
        elif not re.match(r'[A-Za-z]+', nombre):
            flash('El nombre solo puede contener letras', 'error')
        elif not nombre or not apellido or not email or not password:
            flash('Por favor, rellena todos los campos', 'error')
        else:
            cursor.execute('INSERT INTO users (nombre, apellido, email, password) VALUES (%s, %s, %s, %s)', (nombre, apellido, email, hashed_password))
            conn.commit()
            flash('Registro exitoso. Por favor inicia sesión', 'success')
            return redirect(url_for('login'))

    return render_template('crearusuario.html')

@app.route('/logout')
def logout():
    session.pop('logueado', None)
    session.pop('id', None)
    session.pop('email', None)
    flash('Sesión cerrada exitosamente', 'success')
    return redirect(url_for('login'))

@app.route('/misobras.html')
def profile():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    if 'logueado' in session:
        cursor.execute('SELECT * FROM users WHERE id = %s', (session['id'],))
        account = cursor.fetchone()
        return render_template('misobras.html', account=account)

    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True)