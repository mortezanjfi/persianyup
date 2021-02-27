import * as Yup from "yup";
import * as persianform from "persianform";

const messageValidate = (type = "matches", message = "ورودی", object = "") => {
  switch (type) {
    case "persian":
      return `فقط حروف فارسی وارد نمایید(یک فاصله بین حروف)`;
    case "english":
      return `فقط حروف انگلیسی وارد نمایید(یک فاصله بین حروف)`;
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
    .test(
      "isMobilePhone",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhone) => persianform.isMobilePhone(isMobilePhone)
    )
    .min(11, messageValidate("exact", "11", "شماره همراه"))
    .max(11, messageValidate("exact", "11", "شماره همراه"))
    .required(messageValidate("required", "شماره همراه")),

  isHomePhone: Yup.string()
    .test(
      "isHomePhone",
      messageValidate("matches", "تلفن ثابت"),
      (isHomePhone) => persianform.isHomePhone(isHomePhone)
    )
    .min(11, messageValidate("exact", "11", "تلفن ثابت"))
    .max(11, messageValidate("exact", "11", "تلفن ثابت"))
    .required(messageValidate("required", "تلفن ثابت")),

  isPostalCode: Yup.string()
    .test(
      "isPostalCode",
      messageValidate("matches", "کد پستی"),
      (isPostalCode) => persianform.isPostalCode(isPostalCode)
    )
    .min(10, messageValidate("exact", "10", "کد پستی"))
    .max(10, messageValidate("exact", "10", "کد پستی"))
    .required(messageValidate("required", "کد پستی")),
  isGpa: Yup.string()
    .test("isGpa", messageValidate("matches", "معدل"), (isGpa) =>
      persianform.isGpa(isGpa)
    )
    .min(1, messageValidate("exact", "1", "معدل"))
    .max(5, messageValidate("exact", "5", "معدل"))
    .required(messageValidate("required", "معدل")),

  isNationalCode: Yup.string()
    .test(
      "isNationalCode",
      messageValidate("wrong", "کد ملی"),
      (isNationalCode) => {
        let num = Number(isNationalCode);
        return persianform.isNationalCode(num);
      }
    )
    .test(
      "isNationalCode",
      messageValidate("repeat"),
      (isNationalCode) => !persianform.isDuplicate(isNationalCode)
    )
    .min(10, messageValidate("exact", "10", "کد ملی"))
    .max(10, messageValidate("exact", "10", "کد ملی"))
    .required(messageValidate("required", "کد ملی")),

  isAddress: Yup.string()
    .test("isAddress", messageValidate("persian"), (isAddress) =>
      persianform.isPersian(isAddress)
    )
    .test(
      "isAddress",
      messageValidate("repeat"),
      (isAddress) => !persianform.isDuplicate(isAddress)
    )
    .test("isAddress", messageValidate("matches", "آدرس"), (isAddress) =>
      persianform.isAddress(isAddress)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(150, messageValidate("max", "آدرس", "150"))
    .required(messageValidate("required", "آدرس")),

  isSheba: Yup.string()
    .test("isSheba", messageValidate("wrong", "شماره شبا"), (isSheba) => {
      persianform.isSheba(isSheba);
    })
    .test(
      "isSheba",
      messageValidate("repeat"),
      (isSheba) => !persianform.isDuplicate(isSheba)
    )
    .min(24, messageValidate("exact", "24", "شماره شبا"))
    .max(24, messageValidate("exact", "24", "شماره شبا"))
    .required(messageValidate("required", "شماره شبا")),

  isCardNumber: Yup.string()
    .test(
      "isCardNumber",
      messageValidate("wrong", "شماره کارت"),
      (isCardNumber) => {
        persianform.isCardNumber(isCardNumber);
      }
    )
    .test(
      "isCardNumber",
      messageValidate("repeat"),
      (isCardNumber) => !persianform.isDuplicate(isCardNumber)
    )
    .min(16, messageValidate("exact", "16", "شماره کارت"))
    .max(16, messageValidate("exact", "16", "شماره کارت"))
    .required(messageValidate("required", "شماره کارت")),

  isFullName: Yup.string()
    .test("isFullName", messageValidate("persian"), (isFullName) =>
      persianform.isPersian(isFullName)
    )
    .test(
      "isFullName",
      messageValidate("repeat"),
      (isFullName) => !persianform.isDuplicate(isFullName)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(50, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isFirstName: Yup.string()
    .test("isFirstName", messageValidate("persian"), (isFirstName) =>
      persianform.isPersian(isFirstName)
    )
    .test(
      "isFirstName",
      messageValidate("repeat"),
      (isFirstName) => !persianform.isDuplicate(isFirstName)
    )
    .min(3, messageValidate("min", "نام", "3"))
    .max(25, messageValidate("max", "نام", "25"))
    .required(messageValidate("required", "نام")),

  isLastName: Yup.string()
    .test("isLastName", messageValidate("persian"), (isLastName) =>
      persianform.isPersian(isLastName)
    )
    .test(
      "isLastName",
      messageValidate("repeat"),
      (isLastName) => !persianform.isDuplicate(isLastName)
    )
    .min(3, messageValidate("min", "نام خانوادگی", "3"))
    .max(25, messageValidate("max", "نام خانوادگی", "25"))
    .required(messageValidate("required", "نام خانوادگی")),

  isUserName: Yup.string()
    .test("isUserName", messageValidate("english"), (isUserName) =>
      persianform.isEnglish(isUserName)
    )
    .test(
      "isUserName",
      messageValidate("repeat"),
      (isUserName) => !persianform.isDuplicate(isUserName)
    )
    .min(8, messageValidate("min", "نام کاربری", "8"))
    .max(20, messageValidate("max", "نام کاربری", "20"))
    .required(messageValidate("required", "نام کاربری")),

  isFatherName: Yup.string()
    .test(
      "isFatherName",
      messageValidate("matches", "نام پدر"),
      (isFatherName) => persianform.isPersian(isFatherName)
    )
    .test(
      "isFatherName",
      messageValidate("matches", "نام پدر"),
      (isFatherName) => !persianform.isDuplicate(isFatherName)
    )
    .min(3, messageValidate("min", "نام پدر", "3"))
    .max(25, messageValidate("max", "نام پدر", "25"))
    .required(messageValidate("required", "نام پدر")),

  isDate: Yup.string().required(messageValidate("required", "تاریخ تولد")),

  isSsn: Yup.string()
    .max(10, messageValidate("max", "شماره شناسنامه", "10"))
    .required(messageValidate("required", "شماره شناسنامه")),

  isCity: Yup.string()
    .test("isCity", messageValidate("matches", "اسم شهر"), (isCity) =>
      persianform.isPersian(isCity)
    )
    .test(
      "isCity",
      messageValidate("matches", "اسم شهر"),
      (isCity) => !persianform.isDuplicate(isCity)
    )
    .min(2, messageValidate("min", "اسم شهر", "2"))
    .max(80, messageValidate("max", "اسم شهر", "80"))
    .required(messageValidate("required", "اسم شهر")),

  isValidFile: Yup.string()
    .test(
      "isValidFile",
      messageValidate("file", "256", "انتخاب فایل"),
      (isValidFile) => persianform.isValidFile(isValidFile)
    )
    .required(messageValidate("required", "انتخاب فایل")),
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
