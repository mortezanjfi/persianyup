# what is this?

Persian Yup-Schema for Formik!

- This is an useful object for persian form validation with yup and formik

# installation

`npm i persianform`
`yarn add persianform`

Then..

```
import persianYup from 'persianyup'
import { Formik } from 'formik

const schema = persianYup([
        "isMobilePhone",
        "isHomePhone",
        "isPostalCode",
        "isGpa",
        "isNationalCode",
        "isAddress",
        "isSheba",
        "isCardNumber",
        "isFullName",
        "isFirstName",
        "isLastName",
        "isUserName",
        "isFatherName",
        "isDate",
        "isSsn",
        "isCity",
        "isValidFile",

        //required

        "isMobilePhoneRequired",
        "isHomePhoneRequired",
        "isPostalCodeRequired",
        "isGpaRequired",
        "isNationalCodeRequired",
        "isAddressRequired",
        "isShebaRequired",
        "isCardNumberRequired",
        "isFullNameRequired",
        "isFirstNameRequired",
        "isLastNameRequired",
        "isUserNameRequired",
        "isFatherNameRequired",
        "isDateRequired",
        "isSsnRequired",
        "isCityRequired",
        "isValidFileRequired",
    ])

<Formik validationSchema={schema}>
    ...
</Formik>
```

# option

- you can choose each validate string that you want ()
