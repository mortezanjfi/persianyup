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
      return `${object} شما باید ${message} حرف باشد`;
    default:
      break;
  }
};
const shapes = {
  isOtp: Yup.string()
    .min(6, messageValidate("exact", "6", "کد تایید"))
    .max(6, messageValidate("exact", "6", "کد تایید"))
    .required(messageValidate("required", "کد تایید")),

  isMobilePhone: Yup.string()
    .test(
      "isMobilePhone",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhone) => persianform.isMobilePhone(isMobilePhone)
    )
    .min(10, messageValidate("exact", "11", "شماره همراه"))
    .max(10, messageValidate("exact", "11", "شماره همراه"))
    .required(messageValidate("required", "شماره همراه")),

  isHomePhone: Yup.string()
    .test(
      "isHomePhone",
      messageValidate("matches", "تلفن ثابت"),
      (isHomePhone) => persianform.isHomePhone(isHomePhone)
    )
    .min(10, messageValidate("exact", "11", "تلفن ثابت"))
    .max(10, messageValidate("exact", "11", "تلفن ثابت"))
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

  isAddress1: Yup.string()
    .test("isAddress1", messageValidate("persian"), (isAddress1) =>
      persianform.isPersian(isAddress1)
    )
    .test(
      "isAddress1",
      messageValidate("repeat"),
      (isAddress1) => !persianform.isDuplicate(isAddress1)
    )
    .test("isAddress1", messageValidate("matches", "آدرس"), (isAddress1) =>
      persianform.isAddress(isAddress1)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(150, messageValidate("max", "آدرس", "150"))
    .required(messageValidate("required", "آدرس")),

  isAddress2: Yup.string()
    .test("isAddress2", messageValidate("persian"), (isAddress2) =>
      persianform.isPersian(isAddress2)
    )
    .test(
      "isAddress2",
      messageValidate("repeat"),
      (isAddress2) => !persianform.isDuplicate(isAddress2)
    )
    .test("isAddress2", messageValidate("matches", "آدرس"), (isAddress2) =>
      persianform.isAddress(isAddress2)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(150, messageValidate("max", "آدرس", "150"))
    .required(messageValidate("required", "آدرس")),

  isUniversityName: Yup.string()
    .test("isUniversityName", messageValidate("persian"), (isUniversityName) =>
      persianform.isPersian(isUniversityName)
    )
    .test(
      "isUniversityName",
      messageValidate("repeat"),
      (isUniversityName) => !persianform.isDuplicate(isUniversityName)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isUniversityName1: Yup.string()
    .test(
      "isUniversityName1",
      messageValidate("persian"),
      (isUniversityName1) => persianform.isPersian(isUniversityName1)
    )
    .test(
      "isUniversityName1",
      messageValidate("repeat"),
      (isUniversityName1) => !persianform.isDuplicate(isUniversityName1)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isUniversityName2: Yup.string()
    .test(
      "isUniversityName2",
      messageValidate("persian"),
      (isUniversityName2) => persianform.isPersian(isUniversityName2)
    )
    .test(
      "isUniversityName2",
      messageValidate("repeat"),
      (isUniversityName2) => !persianform.isDuplicate(isUniversityName2)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isGpaLetter: Yup.string()
    .test("isGpaLetter", messageValidate("persian"), (isGpaLetter) =>
      persianform.isPersian(isGpaLetter)
    )
    .test(
      "isGpaLetter",
      messageValidate("repeat"),
      (isGpaLetter) => !persianform.isDuplicate(isGpaLetter)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isEducationFieldName: Yup.string()
    .test(
      "isEducationFieldName",
      messageValidate("persian"),
      (isEducationFieldName) => persianform.isPersian(isEducationFieldName)
    )
    .test(
      "isEducationFieldName",
      messageValidate("repeat"),
      (isEducationFieldName) => !persianform.isDuplicate(isEducationFieldName)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isEducationFieldName1: Yup.string()
    .test(
      "isEducationFieldName1",
      messageValidate("persian"),
      (isEducationFieldName1) => persianform.isPersian(isEducationFieldName1)
    )
    .test(
      "isEducationFieldName1",
      messageValidate("repeat"),
      (isEducationFieldName1) => !persianform.isDuplicate(isEducationFieldName1)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

  isEducationFieldName2: Yup.string()
    .test(
      "isEducationFieldName2",
      messageValidate("persian"),
      (isEducationFieldName2) => persianform.isPersian(isEducationFieldName2)
    )
    .test(
      "isEducationFieldName2",
      messageValidate("repeat"),
      (isEducationFieldName2) => !persianform.isDuplicate(isEducationFieldName2)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
    .required(messageValidate("required", "نام و نام خانوادگی")),

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
    .max(40, messageValidate("max", "نام و نام خانوادگی", "50"))
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
    .max(20, messageValidate("max", "نام", "25"))
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
    .min(6, messageValidate("min", "نام کاربری", "8"))
    .max(16, messageValidate("max", "نام کاربری", "20"))
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
    .max(15, messageValidate("max", "نام پدر", "25"))
    .required(messageValidate("required", "نام پدر")),

  isDate: Yup.string().required(messageValidate("required", "تاریخ تولد")),

  isRadioButton: Yup.string().required(messageValidate("required", "")),

  isCheckBox: Yup.bool().oneOf([true], messageValidate("required", "")),

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
    .max(25, messageValidate("max", "اسم شهر", "25"))
    .required(messageValidate("required", "اسم شهر")),

  isValidFile: Yup.string()
    .test(
      "isValidFile",
      messageValidate("isFile", "256", "انتخاب فایل"),
      (isValidFile) => persianform.isValidFile(isValidFile)
    )
    .required(messageValidate("required", "انتخاب فایل")),

  isValidFile1: Yup.string()
    .test(
      "isValidFile1",
      messageValidate("isFile", "256", "انتخاب فایل"),
      (isValidFile1) => persianform.isValidFile(isValidFile1)
    )
    .required(messageValidate("required", "انتخاب فایل")),

  isValidFile2: Yup.string()
    .test(
      "isValidFile2",
      messageValidate("isFile", "256", "انتخاب فایل"),
      (isValidFile2) => persianform.isValidFile(isValidFile2)
    )
    .required(messageValidate("required", "انتخاب فایل")),

  isBarCode: Yup.string()
    .required(messageValidate("required", "بارکد"))
    .min(8, messageValidate("min", "بارکد", "8"))
    .max(9, messageValidate("max", "بارکد", "9")),

  isVin: Yup.string()
    .test("isVin", messageValidate("english"), (isVin) =>
      persianform.isEnglish(isVin)
    )
    .required(messageValidate("required", "vin"))
    .min(17, messageValidate("exact", "17", "vin"))
    .max(17, messageValidate("exact", "17", "vin")),
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
