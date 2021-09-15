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
    case "password":
      return `رمز عبور باید دارای حروف کوچک، بزرگ، عدد و کارکتر باشد!`;
    case "choice":
      return `لطفا یکی از موارد بالا را وارد نمایید!`;
    default:
      break;
  }
};
const shapes = {
  isOtp: Yup.string()
    .required(messageValidate("required", "کد تایید"))
    .min(6, messageValidate("exact", "6", "کد تایید"))
    .max(6, messageValidate("exact", "6", "کد تایید")),

  isMobilePhone: Yup.string()
    .min(11, messageValidate("exact", "11", "شماره همراه"))
    .max(11, messageValidate("exact", "11", "شماره همراه"))
    .required(messageValidate("required", "شماره همراه"))
    .test(
      "isMobilePhone",
      messageValidate("matches", "شماره همراه"),
      (isMobilePhone) => persianform.isMobilePhone(isMobilePhone)
    ),

  isEmail: Yup.string()
    // .required(messageValidate("required", "ایمیل"))
    // .test("isEmail", messageValidate("english"), (isEmail) =>
    //   persianform.isEnglish(isEmail)
    // )
    .email(messageValidate("matches", "ایمیل")),

  isNationalCardSerial: Yup.string()
    .required(messageValidate("required", "سریال پشت کارت ملی"))
    .min(10, messageValidate("exact", "10", "سریال پشت کارت ملی"))
    .max(10, messageValidate("exact", "10", "سریال پشت کارت ملی"))
    .test("isEmail", messageValidate("english"), (isEmail) =>
      persianform.isEnglish(isEmail)
    )
    .test("isEmail", messageValidate("matches", "شماره همراه"), (isEmail) =>
      persianform.isEmail(isEmail)
    ),

  isHomePhone: Yup.string()
    .required(messageValidate("required", "تلفن ثابت"))
    .min(11, messageValidate("exact", "11", "تلفن ثابت"))
    .max(11, messageValidate("exact", "11", "تلفن ثابت"))
    .test(
      "isHomePhone",
      messageValidate("matches", "تلفن ثابت"),
      (isHomePhone) => persianform.isHomePhone(isHomePhone)
    ),

  isFax: Yup.string()
    .min(11, messageValidate("exact", "11", "فکس"))
    .max(11, messageValidate("exact", "11", "فکس"))
    .test("isFax", messageValidate("matches", "فکس"), (fax) =>
      persianform.isFax(fax)
    ),

  isPostalCode: Yup.string()
    .required(messageValidate("required", "کد پستی"))
    .min(10, messageValidate("exact", "10", "کد پستی"))
    .max(10, messageValidate("exact", "10", "کد پستی")),

  isGpa: Yup.string()
    .required(messageValidate("required", "معدل"))
    .min(1, messageValidate("exact", "1", "معدل"))
    .max(5, messageValidate("exact", "5", "معدل"))
    .test("isGpa", messageValidate("matches", "معدل"), (isGpa) =>
      persianform.isGpa(isGpa)
    ),

  isNationalCode: Yup.string()
    .required(messageValidate("required", "کد ملی"))
    .min(10, messageValidate("exact", "10", "کد ملی"))
    .max(10, messageValidate("exact", "10", "کد ملی"))
    .test(
      "isNationalCode",
      messageValidate("wrong", "کد ملی"),
      (isNationalCode) => persianform.isNationalCode(isNationalCode)
    )
    .test(
      "isNationalCode",
      messageValidate("repeat"),
      (isNationalCode) =>
        !persianform.isDuplicate(isNationalCode, { maxDuplicate: 5 })
    ),

  isAddress: Yup.string()
    .required(messageValidate("required", "آدرس"))
    .test("isAddress", messageValidate("persian"), (isAddress) =>
      persianform.isPersian(isAddress)
    )
    .test(
      "isAddress",
      messageValidate("repeat"),
      (isAddress) => !persianform.isDuplicate(isAddress)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(300, messageValidate("max", "آدرس", "300"))
    .test("isAddress", messageValidate("matches", "آدرس"), (isAddress) =>
      persianform.isAddress(isAddress)
    ),

  isAddress1: Yup.string()
    .required(messageValidate("required", "آدرس"))
    .test("isAddress1", messageValidate("persian"), (isAddress1) =>
      persianform.isPersian(isAddress1)
    )
    .test(
      "isAddress1",
      messageValidate("repeat"),
      (isAddress1) => !persianform.isDuplicate(isAddress1)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(300, messageValidate("max", "آدرس", "300"))
    .test("isAddress1", messageValidate("matches", "آدرس"), (isAddress1) =>
      persianform.isAddress(isAddress1)
    ),

  isAddress2: Yup.string()
    .required(messageValidate("required", "آدرس"))
    .test("isAddress2", messageValidate("persian"), (isAddress2) =>
      persianform.isPersian(isAddress2)
    )
    .test(
      "isAddress2",
      messageValidate("repeat"),
      (isAddress2) => !persianform.isDuplicate(isAddress2)
    )
    .min(5, messageValidate("min", "آدرس", "5"))
    .max(300, messageValidate("max", "آدرس", "300"))
    .test("isAddress2", messageValidate("matches", "آدرس"), (isAddress2) =>
      persianform.isAddress(isAddress2)
    ),

  isUniversityName: Yup.string()
    .required(messageValidate("required", "نام دانشگاه"))
    .test("isUniversityName", messageValidate("persian"), (isUniversityName) =>
      persianform.isPersian(isUniversityName)
    )
    .test(
      "isUniversityName",
      messageValidate("repeat"),
      (isUniversityName) => !persianform.isDuplicate(isUniversityName)
    )
    .min(3, messageValidate("min", "نام دانشگاه", "3"))
    .max(40, messageValidate("max", "نام دانشگاه", "50")),

  isUniversityName1: Yup.string()
    .required(messageValidate("required", "نام دانشگاه"))
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
    .min(3, messageValidate("min", "نام دانشگاه", "3"))
    .max(40, messageValidate("max", "نام دانشگاه", "50")),

  isUniversityName2: Yup.string()
    .required(messageValidate("required", "نام دانشگاه"))
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
    .min(3, messageValidate("min", "نام دانشگاه", "3"))
    .max(40, messageValidate("max", "نام دانشگاه", "50")),

  isGpaLetter: Yup.string()
    .required("لطفا معدل خود را به حروف وارد نمایید")
    .min(2, messageValidate("min", "معدل به حروف", "2"))
    .max(50, messageValidate("max", "معدل به حروف", "50"))
    .test("isGpaLetter", messageValidate("persian"), (isGpaLetter) =>
      persianform.isPersian(isGpaLetter, { isNumber: false })
    )
    .test(
      "isGpaLetter",
      messageValidate("repeat"),
      (isGpaLetter) => !persianform.isDuplicate(isGpaLetter)
    ),

  isEducationFieldName: Yup.string()
    .required(messageValidate("required", "نام رشته"))
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
    .min(3, messageValidate("min", "نام رشته", "3"))
    .max(40, messageValidate("max", "نام رشته", "50")),

  isEducationFieldName1: Yup.string()
    .required(messageValidate("required", "نام رشته"))
    .test(
      "isEducationFieldName1",
      messageValidate("persian"),
      (isEducationFieldName1) =>
        persianform.isPersian(isEducationFieldName1, { isNumber: false })
    )
    .test(
      "isEducationFieldName1",
      messageValidate("repeat"),
      (isEducationFieldName1) => !persianform.isDuplicate(isEducationFieldName1)
    )
    .min(3, messageValidate("min", "نام رشته", "3"))
    .max(40, messageValidate("max", "نام رشته", "50")),

  isEducationFieldName2: Yup.string()
    .required(messageValidate("required", "نام رشته"))
    .test(
      "isEducationFieldName2",
      messageValidate("persian"),
      (isEducationFieldName2) =>
        persianform.isPersian(isEducationFieldName2, { isNumber: false })
    )
    .test(
      "isEducationFieldName2",
      messageValidate("repeat"),
      (isEducationFieldName2) => !persianform.isDuplicate(isEducationFieldName2)
    )
    .min(3, messageValidate("min", "نام رشته", "3"))
    .max(40, messageValidate("max", "نام رشته", "50")),

  isSheba: Yup.string()
    .required(messageValidate("required", "شماره شبا"))
    .min(24, messageValidate("exact", "24", "شماره شبا"))
    .max(24, messageValidate("exact", "24", "شماره شبا"))
    .test("isSheba", messageValidate("wrong", "شماره شبا"), (isSheba) => {
      persianform.isSheba(isSheba);
    })
    .test(
      "isSheba",
      messageValidate("repeat"),
      (isSheba) => !persianform.isDuplicate(isSheba)
    ),

  isCardNumber: Yup.string()
    .required(messageValidate("required", "شماره کارت"))
    .min(16, messageValidate("exact", "16", "شماره کارت"))
    .max(16, messageValidate("exact", "16", "شماره کارت"))
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
    ),

  isFullName: Yup.string()
    .required(messageValidate("required", "نام و نام خانوادگی"))
    .test("isFullName", messageValidate("persian"), (isFullName) =>
      persianform.isPersian(isFullName)
    )
    .test(
      "isFullName",
      messageValidate("repeat"),
      (isFullName) => !persianform.isDuplicate(isFullName)
    )
    .min(3, messageValidate("min", "نام و نام خانوادگی", "3"))
    .max(150, messageValidate("max", "نام و نام خانوادگی", "150")),

  isFirstName: Yup.string()
    .required(messageValidate("required", "نام"))
    .test("isFirstName", messageValidate("persian"), (isFirstName) =>
      persianform.isPersian(isFirstName)
    )
    .test(
      "isFirstName",
      messageValidate("repeat"),
      (isFirstName) => !persianform.isDuplicate(isFirstName)
    )
    .min(3, messageValidate("min", "نام", "3"))
    .max(20, messageValidate("max", "نام", "25")),

  isLastName: Yup.string()
    .required(messageValidate("required", "نام خانوادگی"))
    .test("isLastName", messageValidate("persian"), (isLastName) =>
      persianform.isPersian(isLastName)
    )
    .test(
      "isLastName",
      messageValidate("repeat"),
      (isLastName) => !persianform.isDuplicate(isLastName)
    )
    .min(3, messageValidate("min", "نام خانوادگی", "3"))
    .max(25, messageValidate("max", "نام خانوادگی", "25")),

  isUserName: Yup.string()
    .required(messageValidate("required", "نام کاربری"))
    .test("isUserName", messageValidate("english"), (isUserName) =>
      persianform.isEnglish(isUserName)
    )
    .test(
      "isUserName",
      messageValidate("repeat"),
      (isUserName) => !persianform.isDuplicate(isUserName)
    )
    .min(6, messageValidate("min", "نام کاربری", "8"))
    .max(16, messageValidate("max", "نام کاربری", "20")),

  isPassword: Yup.string()
    .required(messageValidate("required", "رمز عبور"))
    .min(8, messageValidate("min", "رمز عبور", "8"))
    .max(30, messageValidate("max", "رمز عبور", "30"))
    .test("isPassword", messageValidate("isPassword"), (isPassword) =>
      persianform.isPassword(isPassword)
    ),
  isFatherName: Yup.string()
    .required(messageValidate("required", "نام پدر"))
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
    .max(15, messageValidate("max", "نام پدر", "25")),

  isBirthDate: Yup.string().required(messageValidate("required", "تاریخ تولد")),
  isDate: Yup.string().required(messageValidate("required", "تاریخ")),
  isDate2: Yup.string().required(messageValidate("required", "تاریخ")),

  isRadioButton: Yup.string().required(messageValidate("choice")),

  isCheckBox: Yup.bool().oneOf([true], messageValidate("required", "")),

  isSsn: Yup.string()
    .required(messageValidate("required", "شماره شناسنامه"))
    .max(10, messageValidate("max", "شماره شناسنامه", "10")),

  isCity: Yup.string()
    .required(messageValidate("required", "اسم شهر"))
    .test("isCity", messageValidate("matches", "اسم شهر"), (isCity) =>
      persianform.isPersian(isCity, { isNumber: false })
    )
    .test(
      "isCity",
      messageValidate("matches", "اسم شهر"),
      (isCity) => !persianform.isDuplicate(isCity)
    )
    .min(2, messageValidate("min", "اسم شهر", "2"))
    .max(25, messageValidate("max", "اسم شهر", "25")),

  isValidFile: Yup.string()
    .required(messageValidate("required", "انتخاب فایل"))
    .test(
      "isValidFile",
      messageValidate("isFile", "256", "انتخاب فایل"),
      (isValidFile) => persianform.isValidFile(isValidFile)
    ),

  isValidFile1: Yup.string()
    .required(messageValidate("required", "انتخاب فایل"))
    .test(
      "isValidFile1",
      messageValidate("isFile", "256", "انتخاب فایل"),
      (isValidFile1) => persianform.isValidFile(isValidFile1)
    ),

  isValidFile2: Yup.string()
    .required(messageValidate("required", "انتخاب فایل"))
    .test(
      "isValidFile2",
      messageValidate("isFile", "256", "انتخاب فایل"),
      (isValidFile2) => persianform.isValidFile(isValidFile2)
    ),

  isBarCode: Yup.string()
    .required(messageValidate("required", "بارکد"))
    .min(8, messageValidate("min", "بارکد", "8"))
    .max(9, messageValidate("max", "بارکد", "9")),

  isVin: Yup.string()
    .required(messageValidate("required", "vin"))
    .test("isVin", messageValidate("english"), (isVin) =>
      persianform.isEnglish(isVin)
    )
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
