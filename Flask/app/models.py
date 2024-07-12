#Definir modelos de datos de la base de datos
from app.database import get_db

class Obra:
    def __init__(self, id_obra=None, nombre=None, categoria=None, artista=None, precio=None, imagen=None, activa=None):
        self.id = id_obra
        self.nombre = nombre
        self.categoria = categoria
        self.artista = artista
        self.precio = precio
        self.imagen = imagen
        self.activa = activa

    @staticmethod
    def __get_obras_by_query(query):
        db = get_db()
        cursor = db.cursor()
        cursor.execute(query)
        rows = cursor.fetchall()

        obras = []
        for row in rows:
            obras.append(
                Obra(
                    id_obra=row[0],
                    nombre=row[1],
                    categoria=row[2],
                    artista=row[3],
                    precio=row[4],
                    imagen=row[5],
                    activa=row[6]
                )
            )
        
        cursor.close()
        return obras

    ''' Metodos de querys '''

    @staticmethod
    def get_by_id(obra_id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM obras WHERE id = %s", (obra_id))
        row = cursor.fetchone()
        cursor.close()

        if row:
            return Obra(
                id_obra=row[0],
                    nombre=row[1],
                    categoria=row[2],
                    artista=row[3],
                    precio=row[4],
                    imagen=row[5],
                    activa=row[6]
            )
        return None

    @staticmethod
    def get_all():
        return Obra.__get_obras_by_query(
            """ SELECT * FROM obras ORDER BY id DESC """)

    @staticmethod
    def get_obras_publicadas():
        return Obra.__get_obras_by_query(
            """ SELECT * FROM obras 
            WHERE activa = true ORDER BY id DESC """)
    
    @staticmethod
    def get_obras_archivadas():
        return Obra.__get_obras_by_query(
            """ SELECT * FROM obras 
            WHERE activa = false ORDER BY id DESC """)

    def save(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute(
            """
                INSERT INTO Obras
                (nombre, categoria, artista, precio, imagen, activa)
                VALUES (%s, %s, %s, %s, %s, %s)
            """,
            (self.nombre, self.categoria, self.artista, self.precio, self.imagen, self.activa))
        self.id_obra = cursor.lastrowid
        print("obra " + self.categoria)
        db.commit()
        cursor.close()

    def delete(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("UPDATE obras SET activa = false WHERE id = %s", (self.id_obra))
        db.commit()
        cursor.close()

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'categoria': self.categoria,
            'artista': self.artista,
            'precio': self.precio,
            'imagen': "./IMG/" + self.imagen,
            'activa': self.activa
        }