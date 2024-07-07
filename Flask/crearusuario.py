from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/crearusuario', methods = ['GET', 'POST'])
def crearusuario():
    
    if request.method == 'POST' and 'nombre' in request.form and 'apellido' in request.form and 'email' in request.form and 'password' in request.form:
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        email = request.form['email']
        password = request.form['password']
        print(nombre)
        print(apellido)
        print(email)
        print(password)
        
        
     return render_template('crearusuario.html')

if __name__ == '__main__':
    app.run(debug=True)