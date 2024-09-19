export class Event

{
    
    public id_evento: string;
    public nombre: string;
    public descripcion: string;
    public descripcion_corta: string;
    public estado: string;
    public visible: boolean;
    public gratuito: boolean;
    public actividad: string;
    public id_lugar: number;
    public lugar: string;
    public id_provincia: number;
    public provincia: string;
    public inicio_funcion: Date;
    public fin_funcion: Date;
    public restriccion: string;
    public imagen_logo: string;
    public menor_precio: number;

    constructor(
        id_evento: string,
        nombre: string,
        descripcion: string,
        descripcion_corta: string,
        estado: string,
        visible: boolean,
        gratuito: boolean,
        actividad: string,
        id_lugar: number,
        lugar: string,
        id_provincia: number,
        provincia: string,
        inicio_funcion: Date,
        fin_funcion: Date,
        restriccion: string,
        imagen_logo: string,
        menor_precio: number
    )
    {
        
        this.id_evento = id_evento;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcion_corta = descripcion_corta;
        this.estado = estado;
        this.visible = visible;
        this.gratuito = gratuito;
        this.actividad = actividad;
        this.id_lugar = id_lugar;
        this.lugar = lugar;
        this.id_provincia = id_provincia;
        this.provincia = provincia;
        this.inicio_funcion = inicio_funcion;
        this.fin_funcion = fin_funcion;
        this.restriccion = restriccion;
        this.imagen_logo = imagen_logo;
        this.menor_precio = menor_precio;
    }
}
