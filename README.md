# what is this?

Persian Yup-Schema for Formik!

- This is an useful object for persian form validation with yup and formik

# Installation

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
    ])

<Formik validationSchema={schema}>
    ...
</Formik>
```

# Options

- you can choose each validate string that you want ()

# Dependencies

-yup
-persianform
