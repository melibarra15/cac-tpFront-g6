import os
import psycopg2
from flask import g
from dotenv import load_dotenv
#from app.datos_provisorios import cargar_obra,obras

load_dotenv()

#configuracion de la base de datos usando variables de entorno
DATABASE_CONFIG = {
    'user=' : os.getenv('BD_USERNAME'),
    'password' : os.getenv('DB_PASSWORD'),
    #'host' : os.getenv('DB_HOST'),
    'database' : os.getenv('DB_NAME'),
    #'port' : os.getenv('DB_PORT', 5432)
}
# se supone que conn deberia usar esto pero se rompe
#con esto no se rompe
#database='galeria_de_arte', user='postgres', password='postgresMel'

def test_connetion():
    conn = psycopg2.connect(database='galeria_de_arte', user='postgres', password='postgresMel')
    cur = conn.cursor()
    conn.commit()
    cur.close()
    conn.close()

    print("""   
        ////////
        TEST CONECTION ok
        ///////
          """)

def create_table_obras():
    conn = psycopg2.connect(database='galeria_de_arte', user='postgres', password='postgresMel')
    cur = conn.cursor()
    cur.execute('DROP TABLE IF EXISTS Obras')
    cur.execute(
    """
    CREATE TABLE IF NOT EXISTS Obras (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        categoria VARCHAR(50) NOT NULL,
        artista VARCHAR(50) NOT NULL,
        precio INT,
        activa BOOLEAN
    );
    """
    )
    print('tabla creada')
    

    #cargando obras iniciales
    cur.execute("""INSERT INTO Obras
                (nombre, categoria, artista, precio, activa) 
                VALUES('obra 1', 'Pintura', 'Emily', 2500, true)""")
    #cur.execute()
    conn.commit()
    cur.close()
    conn.close()

def get_db():
    # Si 'db' no está en el contexto global de Flask 'g'
    if 'db' not in g:
        # Crear una nueva conexión a la base de datos y guardarla en 'g'
        g.db = psycopg2.connect(database='galeria_de_arte', user='postgres', password='postgresMel')
    # Retornar la conexión a la base de datos
    return g.db

def close_db(e=None):
    # Extraer la conexión a la base de datos de 'g' y eliminarla
    db = g.pop('db', None)
    # Si la conexión existe, cerrarla
    if db is not None:
        db.close()

def init_app(app):
    # Registrar 'close_db' para que se ejecute al final del contexto de la aplicación
    app.teardown_appcontext(close_db)