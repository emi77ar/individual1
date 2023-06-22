const validations = (data)=>{
    let errors = {}

    if(/^[a-zA-Z0-9\s\-]{1,100}$/.test(data.Nombre)){
        errors.n1 = "";
    }else{
    errors.n2 = "El nombre es invalido";
    }
    return errors;
}

export default validations;