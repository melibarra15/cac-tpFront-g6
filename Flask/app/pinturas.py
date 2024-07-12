class Pintura:
    def __init__(self, titulo, imagen, artista, precio):
        self.nombre = nombre
        self.titulo = titulo
        self.imagen = imagen
        self.artista = artista
        self.precio = precio

class Galeria:
    def __init__(self, nombre):
        self.nombre = nombre
        self.pinturas = []
              
    
    def registrar_pintura(self, pintura):
        self.pinturas.append(pintura)
    
    def contar_pinturas(self):
        return(len(self.pinturas))
    
    def calcular_precio_total(self):
        total = 0
        for pintura in self.pinturas:
            total += pintura.precio
            return total   
        
    
    galeria = Galeria("Galeria")
    
    pintura1 = Pintura(self, "Naturaleza muerta", imagen, Emily, 485)
    
    galeria.registrar_pintura(pintura1)
    print(galeria.pinturas)