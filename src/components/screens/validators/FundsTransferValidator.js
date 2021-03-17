import Joi from "joi";

export const FundsTranferValidator = (fundsTranferData) => {
    const { email } = fundsTranferData;

    const fundsTransferSchema = Joi.object({
        "Receipient Name": Joi.string().min(3).required(),
        "Receipient Bank": Joi.string().min(3).required(), 
        "Receipient Account Number": Joi.string().min(11).required(),
        "Phone": Joi.string().min(11).max(15).required(),
        "Amount": Joi.string().min(3).required()
    })
    const { error, value } = fundsTransferSchema.validate(fundsTranferData);
    if(error){
        return error.details[0].message;
    }
    if(value){
        return value;
    }
}

