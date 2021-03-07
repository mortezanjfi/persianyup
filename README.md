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
        "isOtp",
        "isGpa",
        "isNationalCode",
        "isAddress",
        "isGpaLetter",
        "isEducationFieldName",
        "isUniversityName",
        "isRadioButton",
        "isCheckBox",
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
        "isVin",
        "isBarcode"

        <!-- Additional Items -->
        "isAddress1",
        "isAddress2",
        "isUniversityName1",
        "isUniversityName2",
        "isEducationFieldName1",
        "isEducationFieldName2",
        "isValidFile1",
        "isValidFile2",
    ])

<Formik validationSchema={schema}>
    ...
</Formik>
```

# Source Code Example

```
isMobilePhone: Yup.string()
    .test(
      "isMobilePhone",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhone) => persianform.isMobilePhone(isMobilePhone)
    )
    .min(11, messageValidate("exact", "11", "شماره همراه"))
    .max(11, messageValidate("exact", "11", "شماره همراه"))
    .required(messageValidate("required", "شماره همراه")),
```

# Options

- you can choose each validate you want

# Dependencies

-yup
-persianform
