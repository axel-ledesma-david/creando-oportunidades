import {object, string} from 'yup';

export const validationSchema = object({
    firstName: string().required('Campo obligatorio'),
    lastName: string(),
    email: string().required('Campo obligatorio'),
    message: string().min(6, 'Mínimo 6 caracteres').required('Campo obligatorio')
})