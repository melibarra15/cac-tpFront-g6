import json

datosParaTabla = []

#leer json
with open('./datos.json') as f:
    datos = json.load(f)

    datosParaTabla = datos
    for dato in datos["obras"]:
        print(dato["titulo"])
        print(dato["imagen"])

def llenarTablaconCeramicas():
    for dato in datosParaTabla:
        '''
        Arreglar en los json:
        categoria
        activa (todas en true)
        '''
        obra = [dato["titulo"], dato["artista"], dato["precio"]]
        print(dato["imagen"])

#con otro json
with open("./artistas.json") as f:
    datos = json.load(f)
    print(datos)