import * as Yup from "yup";
import * as persianform from "persianform";

const messageValidate = (type = "matches", message = "ورودی", object = "") => {
  switch (type) {
    case "persian":
      return `فقط حروف فارسی وارد نمایید`;
    case "english":
      return `فقط حروف انگلیسی وارد نمایید`;
    case "repeat":
      return `لطفا کارکتر های تکراری وارد نکنید!!`;
    case "required":
      return `لطفا ${message} خود را وارد نمایید!`;
    case "matches":
      return `${message} معتبر نیست`;
    case "wrong":
      return `${message} اشتباه است!`;
    case "file":
      return `باید اندازه فایل کمتر از ${message} کیلوبایت باشد`;
    case "min":
      return `${message} شما باید بیشتر از ${object} حرف باشد`;
    case "max":
      return `${message} شما باید کمتر از ${object} حرف باشد`;
    case "exact":
      return `${message} شما باید ${object} حرف باشد`;
    default:
      break;
  }
};
const shapes = {
  isMobilePhone: Yup.string()
    .min(11, messageValidate("exact", "11", "شماره همراه"))
    .max(11, messageValidate("exact", "11", "شماره همراه"))
    .test(
      "isMobilePhone",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhone) => persianform.isMobilePhone(isMobilePhone)
    ),

  isHomePhone: Yup.string()
    .min(11, messageValidate("exact", "11", "تلفن ثابت"))
    .max(11, messageValidate("exact", "11", "تلفن ثابت"))
    .test(
      "isHomePhone",
      messageValidate("matches", "تلفن ثابت"),
      (isHomePhone) => persianform.isHomePhone(isHomePhone)
    ),

  isPostalCode: Yup.string()
    .min(10, messageValidate("exact", "10", "کد پستی"))
    .max(10, messageValidate("exact", "10", "کد پستی"))
    .test(
      "isPostalCode",
      messageValidate("matches", "کد پستی"),
      (isPostalCode) => persianform.isPostalCode(isPostalCode)
    ),

  isGpa: Yup.string()
    .min(1, messageValidate("exact", "1", "معدل"))
    .min(5, messageValidate("exact", "5", "معدل"))
    .test("isGpa", messageValidate("matches", "معدل"), (isGpa) =>
      persianform.isGpa(isGpa)
    ),

  isNationalCode: Yup.string()
    .min(10, messageValidate("exact", "10", "کد ملی"))
    .max(10, messageValidate("exact", "10", "کد ملی"))
    .test(
      "isNationalCode",
      messageValidate("wrong", "کد ملی"),
      (isNationalCode) => {
        persianform.isNationalCode(isNationalCode);
      }
    )
    .test("isNationalCode", messageValidate("repeat"), (isNationalCode) =>
      persianform.isDuplicate(isNationalCode)
    ),

  isAddress: Yup.string()
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(150, messageValidate("max", "آدرس", "150"))
    .test("isAddress", messageValidate("persian"), (isAddress) =>
      persianform.isPersian(isAddress)
    )
    .test("isAddress", messageValidate("repeat"), (isAddress) =>
      persianform.isDuplicate(isAddress)
    )
    .test("isAddress", messageValidate("matches", "آدرس"), (isAddress) =>
      persianform.isAddress(isAddress)
    ),

  isSheba: Yup.string()
    .min(24, messageValidate("exact", "24", "شماره شبا"))
    .max(24, messageValidate("exact", "24", "شماره شبا"))
    .test("isSheba", messageValidate("wrong", "شماره شبا"), (isSheba) => {
      persianform.isSheba(isSheba);
    })
    .test("isSheba", messageValidate("repeat"), (isSheba) =>
      persianform.isDuplicate(isSheba)
    ),

  isCardNumber: Yup.string()
    .min(16, messageValidate("exact", "16", "شماره کارت"))
    .max(16, messageValidate("exact", "16", "شماره کارت"))
    .test(
      "isCardNumber",
      messageValidate("wrong", "شماره کارت"),
      (isCardNumber) => {
        persianform.isCardNumber(isCardNumber);
      }
    )
    .test("isCardNumber", messageValidate("repeat"), (isCardNumber) =>
      persianform.isDuplicate(isCardNumber)
    ),

  isFullName: Yup.string()
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(50, messageValidate("max", "نام و نام خانوادگی", "50"))
    .test("fullName", messageValidate("persian"), (fullName) =>
      persianform.isPersian(fullName)
    )
    .test("fullName", messageValidate("repeat"), (fullName) =>
      persianform.isDuplicate(fullName)
    ),

  isFirstName: Yup.string()
    .min(3, messageValidate("min", "نام", "3"))
    .max(25, messageValidate("max", "نام", "25"))
    .test("firstName", messageValidate("persian"), (firstName) =>
      persianform.isPersian(firstName)
    )
    .test("firstName", messageValidate("repeat"), (firstName) =>
      persianform.isDuplicate(firstName)
    ),

  isLastName: Yup.string()
    .min(3, messageValidate("min", "نام خانوادگی", "3"))
    .max(25, messageValidate("max", "نام خانوادگی", "25"))
    .test("lastName", messageValidate("persian"), (lastName) =>
      persianform.isPersian(lastName)
    )
    .test("lastName", messageValidate("repeat"), (lastName) =>
      persianform.isDuplicate(lastName)
    ),

  isUserName: Yup.string()
    .min(8, messageValidate("min", "نام کاربری", "8"))
    .max(20, messageValidate("max", "نام کاربری", "20"))
    .test("userName", messageValidate("english"), (userName) =>
      persianform.isEnglish(userName)
    )
    .test("userName", messageValidate("repeat"), (userName) =>
      persianform.isDuplicate(userName)
    ),

  isFatherName: Yup.string()
    .min(3, messageValidate("min", "نام پدر", "3"))
    .max(25, messageValidate("max", "نام پدر", "25"))
    .test("fatherName", messageValidate("matches", "نام پدر"), (fatherName) =>
      persianform.isPersian(fatherName)
    )
    .test("fatherName", messageValidate("matches", "نام پدر"), (fatherName) =>
      persianform.isDuplicate(fatherName)
    ),

  isDate: Yup.string().required(messageValidate("required", "تاریخ تولد")),

  isSsn: Yup.string().max(10, messageValidate("max", "شماره شناسنامه", "10")),

  isCity: Yup.string()
    .min(2, messageValidate("min", "اسم شهر", "2"))
    .max(80, messageValidate("max", "اسم شهر", "80"))
    .test("isCity", messageValidate("matches", "اسم شهر"), (isCity) =>
      persianform.isPersian(isCity)
    )
    .test("isCity", messageValidate("matches", "اسم شهر"), (isCity) =>
      persianform.isDuplicate(isCity)
    ),

  isValidFile: Yup.string().test(
    "isValidFile",
    messageValidate("file", "256", "انتخاب فایل"),
    (isValidFile) => persianform.isValidFile(isValidFile)
  ),

  // Requirement

  isMobilePhoneRequired: Yup.string()
    .min(11, messageValidate("exact", "11", "شماره همراه"))
    .max(11, messageValidate("exact", "11", "شماره همراه"))
    .required(messageValidate("required", "شماره همراه"))
    .test(
      "isMobilePhone",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhone) => persianform.isMobilePhone(isMobilePhone)
    ),

  isHomePhoneRequired: Yup.string()
    .min(11, messageValidate("exact", "11", "تلفن ثابت"))
    .max(11, messageValidate("exact", "11", "تلفن ثابت"))
    .required(messageValidate("required", "تلفن ثابت"))
    .test(
      "isHomePhone",
      messageValidate("matches", "تلفن ثابت"),
      (isHomePhone) => persianform.isHomePhone(isHomePhone)
    ),

  isPostalCodeRequired: Yup.string()
    .min(10, messageValidate("exact", "10", "کد پستی"))
    .max(10, messageValidate("exact", "10", "کد پستی"))
    .required(messageValidate("required", "کد پستی"))
    .test(
      "isPostalCode",
      messageValidate("matches", "کد پستی"),
      (isPostalCode) => persianform.isPostalCode(isPostalCode)
    ),

  isGpaRequired: Yup.string()
    .min(1, messageValidate("exact", "1", "معدل"))
    .min(5, messageValidate("exact", "5", "معدل"))
    .required(messageValidate("required", "معدل"))
    .test("isGpa", messageValidate("matches", "معدل"), (isGpa) =>
      persianform.isGpa(isGpa)
    ),

  isNationalCodeRequired: Yup.string()
    .min(10, messageValidate("exact", "10", "کد ملی"))
    .max(10, messageValidate("exact", "10", "کد ملی"))
    .required(messageValidate("required", "کد ملی"))
    .test(
      "isNationalCode",
      messageValidate("wrong", "کد ملی"),
      (isNationalCode) => {
        persianform.isNationalCode(isNationalCode);
      }
    )
    .test("isNationalCode", messageValidate("repeat"), (isNationalCode) =>
      persianform.isDuplicate(isNationalCode)
    ),

  isAddressRequired: Yup.string()
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(150, messageValidate("max", "آدرس", "150"))
    .required(messageValidate("required", "آدرس"))
    .test("isAddress", messageValidate("persian"), (isAddress) =>
      persianform.isPersian(isAddress)
    )
    .test("isAddress", messageValidate("repeat"), (isAddress) =>
      persianform.isDuplicate(isAddress)
    )
    .test("isAddress", messageValidate("matches", "آدرس"), (isAddress) =>
      persianform.isAddress(isAddress)
    ),

  isShebaRequired: Yup.string()
    .min(24, messageValidate("exact", "24", "شماره شبا"))
    .max(24, messageValidate("exact", "24", "شماره شبا"))
    .required(messageValidate("required", "شماره شبا"))
    .test("isSheba", messageValidate("wrong", "شماره شبا"), (isSheba) => {
      persianform.isSheba(isSheba);
    })
    .test("isSheba", messageValidate("repeat"), (isSheba) =>
      persianform.isDuplicate(isSheba)
    ),

  isCardNumberRequired: Yup.string()
    .min(16, messageValidate("exact", "16", "شماره کارت"))
    .max(16, messageValidate("exact", "16", "شماره کارت"))
    .required(messageValidate("required", "شماره کارت"))
    .test(
      "isCardNumber",
      messageValidate("wrong", "شماره کارت"),
      (isCardNumber) => {
        persianform.isCardNumber(isCardNumber);
      }
    )
    .test("isCardNumber", messageValidate("repeat"), (isCardNumber) =>
      persianform.isDuplicate(isCardNumber)
    ),

  isFullNameRequired: Yup.string()
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(50, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی"))
    .test("fullName", messageValidate("persian"), (fullName) =>
      persianform.isPersian(fullName)
    )
    .test("fullName", messageValidate("repeat"), (fullName) =>
      persianform.isDuplicate(fullName)
    ),

  isFirstNameRequired: Yup.string()
    .min(3, messageValidate("min", "نام", "3"))
    .max(25, messageValidate("max", "نام", "25"))
    .required(messageValidate("required", "نام"))
    .test("firstName", messageValidate("persian"), (firstName) =>
      persianform.isPersian(firstName)
    )
    .test("firstName", messageValidate("repeat"), (firstName) =>
      persianform.isDuplicate(firstName)
    ),

  isLastNameRequired: Yup.string()
    .min(3, messageValidate("min", "نام خانوادگی", "3"))
    .max(25, messageValidate("max", "نام خانوادگی", "25"))
    .required(messageValidate("required", "نام خانوادگی"))
    .test("lastName", messageValidate("persian"), (lastName) =>
      persianform.isPersian(lastName)
    )
    .test("lastName", messageValidate("repeat"), (lastName) =>
      persianform.isDuplicate(lastName)
    ),

  isUserNameRequired: Yup.string()
    .min(8, messageValidate("min", "نام کاربری", "8"))
    .max(20, messageValidate("max", "نام کاربری", "20"))
    .required(messageValidate("required", "نام کاربری"))
    .test("userName", messageValidate("english"), (userName) =>
      persianform.isEnglish(userName)
    )
    .test("userName", messageValidate("repeat"), (userName) =>
      persianform.isDuplicate(userName)
    ),

  isFatherNameRequired: Yup.string()
    .min(3, messageValidate("min", "نام پدر", "3"))
    .max(25, messageValidate("max", "نام پدر", "25"))
    .required(messageValidate("required", "نام پدر"))
    .test("fatherName", messageValidate("matches", "نام پدر"), (fatherName) =>
      persianform.isPersian(fatherName)
    )
    .test("fatherName", messageValidate("matches", "نام پدر"), (fatherName) =>
      persianform.isDuplicate(fatherName)
    ),

  isDateRequired: Yup.string().required(
    messageValidate("required", "تاریخ تولد")
  ),

  isSsnRequired: Yup.string()
    .max(10, messageValidate("max", "شماره شناسنامه", "10"))
    .required(messageValidate("required", "شماره شناسنامه")),

  isCityRequired: Yup.string()
    .min(2, messageValidate("min", "اسم شهر", "2"))
    .max(80, messageValidate("max", "اسم شهر", "80"))
    .required(messageValidate("required", "اسم شهر"))
    .test("isCity", messageValidate("matches", "اسم شهر"), (isCity) =>
      persianform.isPersian(isCity)
    )
    .test("isCity", messageValidate("matches", "اسم شهر"), (isCity) =>
      persianform.isDuplicate(isCity)
    ),

  isValidFileRequired: Yup.string()
    .required(messageValidate("required", "انتخاب فایل"))
    .test(
      "isValidFile",
      messageValidate("file", "256", "انتخاب فایل"),
      (isValidFile) => persianform.isValidFile(isValidFile)
    ),
};

const persianYup = (...params) => {
  let data = {};
  params[0].filter((param) => {
    data = { ...data, [param]: shapes[param] };
    return data;
  });
  return Yup.object().shape(data);
};

export default persianYup;
