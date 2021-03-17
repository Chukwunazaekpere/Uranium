
import Joi from "joi";


export const loginValidator = (loginData) => {
    const { Email } = loginData;
    let validatorSchema;
    if(Email !== undefined ){
            const loginValidatorSchema = Joi.object({
            Email: Joi.string().email({ tlds: {allow: false}}).required(),
            Password: Joi.string().min(6).required()
        })
        validatorSchema = loginValidatorSchema;
    }else{
            const loginValidatorSchema = Joi.object({
            "Account Number": Joi.string().min(11).required(),
            "Password": Joi.string().min(6).required()
        })
        validatorSchema = loginValidatorSchema;
    }

    const { error, value } = validatorSchema.validate(loginData);
    if(error){
        return error.details[0].message;
    }
    return value;

}


export const signupValidator = (signupData) => {
    const signupValidatorSchema = Joi.object({
        Firstname: Joi.string().min(3).required(),
        Lastname: Joi.string().min(3).required(),
        Email: Joi.string().email({ tlds: {allow: false}}).required(),
        Password: Joi.string().min(6).required(),
        "Confirm Password": Joi.string().min(6).required(),
        Phone: Joi.string().min(11).max(11).required()
    })
    const { error, value } = signupValidatorSchema.validate(signupData);
    if(error){
        return error.details[0].message;
    }
    if(value){
        if(value['Password'] !== value['Confirm Password']){
            return "Passeord mismatch: the fields; 'Password' and 'Confirm Password' must be the same."
        }

        let phone = value['Phone'];
        for(let i=0; i < phone.length; i++){
            let bool = String(Number(phone[i])) === String(NaN);
            if(bool){
                return "The input in 'Phone' field is not a valid phone - number."
            }
        }
        return value;
    }
}