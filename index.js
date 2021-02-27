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
      "isMobilePhoneRequired",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhoneRequired) =>
        persianform.isMobilePhone(isMobilePhoneRequired)
    )
    .min(11, messageValidate("exact", "11", "شماره همراه"))
    .max(11, messageValidate("exact", "11", "شماره همراه"))
    .required(messageValidate("required", "شماره همراه")),

  isHomePhone: Yup.string()
    .test(
      "isHomePhoneRequired",
      messageValidate("matches", "تلفن ثابت"),
      (isHomePhoneRequired) => persianform.isHomePhone(isHomePhoneRequired)
    )
    .min(11, messageValidate("exact", "11", "تلفن ثابت"))
    .max(11, messageValidate("exact", "11", "تلفن ثابت"))
    .required(messageValidate("required", "تلفن ثابت")),

  isPostalCode: Yup.string()
    .test(
      "isPostalCodeRequired",
      messageValidate("matches", "کد پستی"),
      (isPostalCodeRequired) => persianform.isPostalCode(isPostalCodeRequired)
    )
    .min(10, messageValidate("exact", "10", "کد پستی"))
    .max(10, messageValidate("exact", "10", "کد پستی"))
    .required(messageValidate("required", "کد پستی")),
  isGpa: Yup.string()
    .test(
      "isGpaRequired",
      messageValidate("matches", "معدل"),
      (isGpaRequired) => persianform.isGpa(isGpaRequired)
    )
    .min(1, messageValidate("exact", "1", "معدل"))
    .min(5, messageValidate("exact", "5", "معدل"))
    .required(messageValidate("required", "معدل")),

  isNationalCode: Yup.string()
    .test(
      "isNationalCodeRequired",
      messageValidate("wrong", "کد ملی"),
      (isNationalCodeRequired) => {
        let num = Number(isNationalCodeRequired);
        return persianform.isNationalCode(num);
      }
    )
    .test(
      "isNationalCodeRequired",
      messageValidate("repeat"),
      (isNationalCodeRequired) =>
        !persianform.isDuplicate(isNationalCodeRequired)
    )
    .min(10, messageValidate("exact", "10", "کد ملی"))
    .max(10, messageValidate("exact", "10", "کد ملی"))
    .required(messageValidate("required", "کد ملی")),

  isAddress: Yup.string()
    .test(
      "isAddressRequired",
      messageValidate("persian"),
      (isAddressRequired) => persianform.isPersian(isAddressRequired)
    )
    .test(
      "isAddressRequired",
      messageValidate("repeat"),
      (isAddressRequired) => !persianform.isDuplicate(isAddressRequired)
    )
    .test(
      "isAddressRequired",
      messageValidate("matches", "آدرس"),
      (isAddressRequired) => persianform.isAddress(isAddressRequired)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(150, messageValidate("max", "آدرس", "150"))
    .required(messageValidate("required", "آدرس")),

  isSheba: Yup.string()
    .test(
      "isShebaRequired",
      messageValidate("wrong", "شماره شبا"),
      (isShebaRequired) => {
        persianform.isSheba(isShebaRequired);
      }
    )
    .test(
      "isShebaRequired",
      messageValidate("repeat"),
      (isShebaRequired) => !persianform.isDuplicate(isShebaRequired)
    )
    .min(24, messageValidate("exact", "24", "شماره شبا"))
    .max(24, messageValidate("exact", "24", "شماره شبا"))
    .required(messageValidate("required", "شماره شبا")),

  isCardNumber: Yup.string()
    .test(
      "isCardNumberRequired",
      messageValidate("wrong", "شماره کارت"),
      (isCardNumberRequired) => {
        persianform.isCardNumber(isCardNumberRequired);
      }
    )
    .test(
      "isCardNumberRequired",
      messageValidate("repeat"),
      (isCardNumberRequired) => !persianform.isDuplicate(isCardNumberRequired)
    )
    .min(16, messageValidate("exact", "16", "شماره کارت"))
    .max(16, messageValidate("exact", "16", "شماره کارت"))
    .required(messageValidate("required", "شماره کارت")),

  isFullName: Yup.string()
    .test(
      "isFullNameRequired",
      messageValidate("persian"),
      (isFullNameRequired) => persianform.isPersian(isFullNameRequired)
    )
    .test(
      "isFullNameRequired",
      messageValidate("repeat"),
      (isFullNameRequired) => !persianform.isDuplicate(isFullNameRequired)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(50, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isFirstName: Yup.string()
    .test(
      "isFirstNameRequired",
      messageValidate("persian"),
      (isFirstNameRequired) => persianform.isPersian(isFirstNameRequired)
    )
    .test(
      "isFirstNameRequired",
      messageValidate("repeat"),
      (isFirstNameRequired) => !persianform.isDuplicate(isFirstNameRequired)
    )
    .min(3, messageValidate("min", "نام", "3"))
    .max(25, messageValidate("max", "نام", "25"))
    .required(messageValidate("required", "نام")),

  isLastName: Yup.string()
    .test(
      "isLastNameRequired",
      messageValidate("persian"),
      (isLastNameRequired) => persianform.isPersian(isLastNameRequired)
    )
    .test(
      "isLastNameRequired",
      messageValidate("repeat"),
      (isLastNameRequired) => !persianform.isDuplicate(isLastNameRequired)
    )
    .min(3, messageValidate("min", "نام خانوادگی", "3"))
    .max(25, messageValidate("max", "نام خانوادگی", "25"))
    .required(messageValidate("required", "نام خانوادگی")),

  isUserName: Yup.string()
    .test(
      "isUserNameRequired",
      messageValidate("english"),
      (isUserNameRequired) => persianform.isEnglish(isUserNameRequired)
    )
    .test(
      "isUserNameRequired",
      messageValidate("repeat"),
      (isUserNameRequired) => !persianform.isDuplicate(isUserNameRequired)
    )
    .min(8, messageValidate("min", "نام کاربری", "8"))
    .max(20, messageValidate("max", "نام کاربری", "20"))
    .required(messageValidate("required", "نام کاربری")),

  isFatherName: Yup.string()
    .test(
      "isFatherNameRequired",
      messageValidate("matches", "نام پدر"),
      (isFatherNameRequired) => persianform.isPersian(isFatherNameRequired)
    )
    .test(
      "isFatherNameRequired",
      messageValidate("matches", "نام پدر"),
      (isFatherNameRequired) => !persianform.isDuplicate(isFatherNameRequired)
    )
    .min(3, messageValidate("min", "نام پدر", "3"))
    .max(25, messageValidate("max", "نام پدر", "25"))
    .required(messageValidate("required", "نام پدر")),

  isDate: Yup.string().required(messageValidate("required", "تاریخ تولد")),

  isSsn: Yup.string()
    .max(10, messageValidate("max", "شماره شناسنامه", "10"))
    .required(messageValidate("required", "شماره شناسنامه")),

  isCity: Yup.string()
    .test(
      "isCityRequired",
      messageValidate("matches", "اسم شهر"),
      (isCityRequired) => persianform.isPersian(isCityRequired)
    )
    .test(
      "isCityRequired",
      messageValidate("matches", "اسم شهر"),
      (isCityRequired) => !persianform.isDuplicate(isCityRequired)
    )
    .min(2, messageValidate("min", "اسم شهر", "2"))
    .max(80, messageValidate("max", "اسم شهر", "80"))
    .required(messageValidate("required", "اسم شهر")),

  isValidFile: Yup.string()
    .test(
      "isValidFileRequired",
      messageValidate("file", "256", "انتخاب فایل"),
      (isValidFileRequired) => persianform.isValidFile(isValidFileRequired)
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
