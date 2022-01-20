import { object, string } from 'yup';
import * as yup from 'yup'
const userSchema = object({

    email: string().email('geçerli bir email giriniz.').required('bu alan zorunludur'),
    password: string().min(5, 'parolanız en az 5 karakter olmalıdır.').required('bu alan zorunludur'),
    passwordConfirm: string().oneOf([yup.ref('password')], 'parolanız eşleşmiyor').required('bu alan zorunludur'),
});

export default userSchema