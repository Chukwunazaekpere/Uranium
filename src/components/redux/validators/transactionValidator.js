
import Joi from "joi";


export const fundsTransferValidator = (fundsTransferData) => {
        const fundsTransferValidatorSchema = Joi.object({
            "Receipient Name": Joi.string().min(3).required(),
            "Receipient Bank": Joi.string().min(3).required(),
            "Receipient Account Number": Joi.string().min(11).max(11).required(),
            "Phone": Joi.string().min(11).max(11).required(),
            "Amount": Joi.string().required()
        })

    const { error, value } = fundsTransferValidatorSchema.validate(fundsTransferData);
    if(error){
        return error.details[0].message;
    }
    return value;

}


export const fundsDepositValidator = (fundsDepositData) => {
    // console.log("\n\t In deposit validatorstring
    const fundsDepositValidatorSchema = Joi.object({
        "Source Account Number": Joi.string().min(11).max(11).required(),
        "Receiving Account Number": Joi.string().min(11).max(11).required(),
        "Phone": Joi.string().min(11).max(11).required(),
        "Amount": Joi.string().min(1).required()
    })

    const { error, value } = fundsDepositValidatorSchema.validate(fundsDepositData);
    if(error){
        return error.details[0].message;
    }
    return value;
}


export const fundsWithrawalValidator = (fundsDepositData) => {
    const fundsWithdrawalValidatorSchema = Joi.object({
        "Account Name": Joi.string().min(3).required(),
        "Account Number": Joi.string().min(11).max(11).required(),
        "Phone": Joi.string().min(11).max(11).required(),
        "Amount": Joi.string().min(1).required()
    })

    const { error, value } = fundsWithdrawalValidatorSchema.validate(fundsDepositData);
    if(error){
        return error.details[0].message;
    }
    return value;
}