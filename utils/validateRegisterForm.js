import * as yup from 'yup';

const formSchema = () => {
    return yup.object().shape({
        email: yup.string().email().required('errorRequired'),
        password: yup.string().min(6, 'errorPasswordLength').required('errorRequired'),
        passwordConfirm: yup.string().min(6, 'errorPasswordLength').required('errorRequired').oneOf([yup.ref('password'), null], 'errorPasswordNotMatch')
    });
}
export default ((form) => {
    return formSchema().validate(form).then(() => {})
    .catch((e) => e)    
})