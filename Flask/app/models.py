from app.database import get_db

class Obra:
    def __init__(self, id_obra=None, nombre=None, categoria=None, artista=None, activa=None):
        self.id = id_obra
        self.nombre = nombre
        self.categoria = categoria
        self.artista = artista
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
                    activa=row[4]
                )
            )
        
        cursor.close()

        return obras

    ''' Metodos de querys '''

    @staticmethod
    def get_all():
        return Obra.__get_obras_by_query(
            """ SELECT * FROM obras """)

    '''
    Falta: 
    metodo para obtener las archivadas (get_all_archived())
    metodo para filtrar por artista (get_by_artista())
    '''

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'categoria': self.categoria,
            'artista': self.artista,
            'activa': self.activa
        }