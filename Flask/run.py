from flask import Flask
from app.views import *
from app.database import test_connetion, create_table_obras

app = Flask(__name__)

#Rutas
app.route('/', methods=['GET'])(index)
app.route('/obras/publicadas', methods=['GET'])(ver_obras_publicadas)
'''
hacer app route de 
ver_pinturas
ver_stickers
ver_ceramica
ver_archivadas
'''

test_connetion()
create_table_obras()

if __name__ == '__main__':
    app.run(debug=True)