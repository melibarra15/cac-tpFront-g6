#Acá registrar las rutas y definir las funciones de vista que renderizan las plantillas HTML
from flask import Flask, render_template, url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/artista')
def artista():
    return render_template('artista.html')

@app.route('/ceramica')
def ceramica():
    return render_template('ceramica.html')

@app.route('/comisiones')
def comisiones():
    return render_template('comisiones.html')

@app.route('/registro')
def crearusuario():
    return render_template('registro.html')

@app.route('/fotografia')
def fotografia():
    return render_template('fotografia.html')

@app.route('/galeria')
def galeria():
    return render_template('galeria')

@app.route('/ilustracion')
def ilustracion():
    return render_template('ilustracion.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/misobras')
def misobras():
    return render_template('misobras.html')

@app.route('/pinturas')
def pinturas():
    return render_template('pinturas.html')

@app.route('/stickers')
def stickers():
    return render_template('stickers.html')

@app.route('/subirobras')
def subirobras():
    return render_template('subirobras.html')

if __name__ == '__main__':
    app.run(debug = True)