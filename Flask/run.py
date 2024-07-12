#Se usa para ejecutar la aplicación
from flask import Flask, render_template, url_for
from flask_cors import CORS
from app.views import *
from app.database import *

app = Flask(__name__)

#Rutas
app.route('/', methods=['GET'])(index)
app.route('/obras', methods=['GET'])(ver_obras)
app.route('/obras/publicadas', methods=['GET'])(ver_obras_publicadas)
app.route('/obras/archivadas', methods=['GET'])(ver_obras_archivadas)
app.route('/obras/create', methods=['POST'])(create_task)
app.route('/obras/eliminarObra/<int:obra_id>', methods=['DELETE'])(archivar_obra)
app.route('/obras/update/<int:obra_id>', methods=['PUT'])(actualizar_obra)

test_connetion()
create_table_obras()
init_app(app)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True)