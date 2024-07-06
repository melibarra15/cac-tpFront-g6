from flask import jsonify, request
from app.models import Obra

def index():
    return jsonify(
        {
        'mensaje': 'Hola api con flask'
        }
    )

def ver_obras_publicadas():
    obras = Obra.get_all()

    return jsonify([obra.serialize() for obra in obras])

def get_task(task_id):
    task = {
        'id': task_id
    }

    return jsonify(task)

def create_task():
    datos = request.json

    return jsonify({'message': 'Task crated succesfully', 'data':datos}), 201