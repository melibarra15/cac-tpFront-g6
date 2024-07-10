from flask import jsonify, request
from app.models import Obra

def index():
    return jsonify(
        {
        'mensaje': 'Hola api con flask'
        }
    )

def ver_obras():
    obras = Obra.get_all()
    return jsonify([obra.serialize() for obra in obras])

def ver_obras_publicadas():
    obras = Obra.get_obras_publicadas()
    return jsonify([obra.serialize() for obra in obras])

def ver_obras_archivadas():
    obras = Obra.get_obras_archivadas()
    return jsonify([obra.serialize() for obra in obras])

def create_task():
    datos = request.json
    nueva_Obra = Obra(
        nombre=datos['nombre'],
        categoria=datos['categoria'],
        artista=datos['artista'],
        imagen=datos['imagen'],
        precio=datos['precio'],     
        activa=True
    )
    nueva_Obra.save()
    return jsonify({'message': 'Obra creada exitosamente'}), 201