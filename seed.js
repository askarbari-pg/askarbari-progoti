// আসকরবাড়ী প্রগতি গ্রুপ — সিড ডেটা (মূল Google Sheet থেকে পড়া, 2026-11-06)
// কোনো NID / জন্ম নিবন্ধন নম্বর এই ফাইলে নেই।
window.SEED_DATA = {
  settings: {
    unitPrice: 1000,
    groupNameBn: "আসকরবাড়ী প্রগতি গ্রুপ",
    groupNameEn: "Askarbari Progoti Group",
    invoiceEmailEnabled: false,
    paymentInfo: "",
    documents: []
  },
  notices: [
    { id: "NTC-001", title: "স্বাগতম", body: "আসকরবাড়ী প্রগতি গ্রুপ অ্যাপে স্বাগতম! এখানে লগইন করে আপনি আপনার জমা, একক ও সব ইনভয়েস দেখতে পারবেন, আর ড্যাশবোর্ডে পুরো গ্রুপের মোট হিসাব ও নোটিশ পাবেন।", date: "2026-11-17", from: "Admin" }
  ],
  // ব্যক্তি (একজন ব্যক্তির একাধিক সদস্য হিসাব থাকতে পারে — একটি লগইনেই সব হিসাব দেখা যায়)
  persons: [
    { id: "P-001", name: "Muhammad Sohel", mobile: "97335469771", email: "muhammadsohal@gmail.com", username: "m26-001", passwordSet: false, memberIds: ["M26-001", "M26-002", "M26-003"] },
    { id: "P-002", name: "Md Rabiul Hasan", mobile: "01619081860", email: "hasanmdrabiul11@gmail.com", username: "m26-004", passwordSet: false, memberIds: ["M26-004", "M26-005"] },
    { id: "P-003", name: "Md Nure Alam", mobile: "+9710553923345", email: "nurealammd867@gmail.com", username: "m26-006", passwordSet: false, memberIds: ["M26-006", "M26-007"] },
    { id: "P-004", name: "Mohammad Raju", mobile: "01867150032", email: "tanjimulhouqe0032@gmail.com", username: "m26-008", passwordSet: false, memberIds: ["M26-008"] },
    { id: "P-005", name: "Md. Abdulla", mobile: "01880342133", email: "mdabdulla1943@gmail.com", username: "m26-009", passwordSet: false, memberIds: ["M26-009"] },
    { id: "P-006", name: "Al Zakaria", mobile: "+971564348123", email: "mdjakarianeloy630@gmail.com", username: "m26-010", passwordSet: false, memberIds: ["M26-010", "M26-011"] },
    { id: "P-007", name: "Md Alauddin", mobile: "01867770609", email: "smalauddinbd2021@gmail.com", username: "m26-012", passwordSet: false, memberIds: ["M26-012", "M26-013"] },
    { id: "P-008", name: "Abdul awal", mobile: "+9710522363575", email: "abdulawal2013abudhabe@gmail.com", username: "m26-014", passwordSet: false, memberIds: ["M26-014", "M26-015"] },
    { id: "P-009", name: "Md Mojahid Hossain Sunny", mobile: "01794719323", email: "mhssunny482@gmail.com", username: "m26-016", passwordSet: false, memberIds: ["M26-016"] },
    { id: "P-010", name: "Nor Jaman", mobile: "1888259264", email: "mdnorjamal407@gmail.com", username: "m26-017", passwordSet: false, memberIds: ["M26-017"] }
  ],
  // পরিচালনা পরিষদ / কমিটি (অ্যাডমিন প্যানেল থেকে সদস্য যোগ/বদল করা যায়)
  committee: [
    { id: "CMT-001", name: "Md. Abdulla", role: "অ্যাডমিন", memberId: "M26-009", mobile: "01880342133", note: "গ্রুপ পরিচালনা ও অ্যাপ ব্যবস্থাপনা" }
  ],
  members: [
    { id: "M26-001", name: "Muhammad Sohel-1", mobile: "97335469771", email: "muhammadsohal@gmail.com", joinDate: "2026-11-01", status: "সক্রিয়", totalDeposit: 1000, totalUnits: 1, username: "m26-001", passwordSet: false },
    { id: "M26-002", name: "Muhammad Sohel-2", mobile: "97335469771", email: "muhammadsohal@gmail.com", joinDate: "2026-11-01", status: "সক্রিয়", totalDeposit: 1000, totalUnits: 1, username: "m26-002", passwordSet: false },
    { id: "M26-003", name: "Muhammad Sohel-3", mobile: "97335469771", email: "muhammadsohal@gmail.com", joinDate: "2026-11-01", status: "সক্রিয়", totalDeposit: 1000, totalUnits: 1, username: "m26-003", passwordSet: false },
    { id: "M26-004", name: "Md Rabiul Hasan-1", mobile: "01619081860", email: "hasanmdrabiul11@gmail.com", joinDate: "2026-10-04", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-004", passwordSet: false },
    { id: "M26-005", name: "Md Rabiul Hasan-2", mobile: "01619081860", email: "hasanmdrabiul11@gmail.com", joinDate: "2026-10-05", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-005", passwordSet: false },
    { id: "M26-006", name: "Md Nure Alam-1", mobile: "+9710553923345", email: "nurealammd867@gmail.com", joinDate: "2026-10-10", status: "সক্রিয়", totalDeposit: 1000, totalUnits: 1, username: "m26-006", passwordSet: false },
    { id: "M26-007", name: "Md Nure alam-2", mobile: "+9710553923345", email: "nurealammd867@gmail.com", joinDate: "2026-10-10", status: "সক্রিয়", totalDeposit: 1000, totalUnits: 1, username: "m26-007", passwordSet: false },
    { id: "M26-008", name: "Mohammad Raju", mobile: "01867150032", email: "tanjimulhouqe0032@gmail.com", joinDate: "2026-10-10", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-008", passwordSet: false },
    { id: "M26-009", name: "Md. Abdulla", mobile: "01880342133", email: "mdabdulla1943@gmail.com", joinDate: "2026-10-11", status: "সক্রিয়", totalDeposit: 2000, totalUnits: 2, username: "m26-009", passwordSet: false },
    { id: "M26-010", name: "Al Zakaria", mobile: "+971564348123", email: "mdjakarianeloy630@gmail.com", joinDate: "2026-10-12", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-010", passwordSet: false },
    { id: "M26-011", name: "Al Zakaria (Nazim uddin)", mobile: "+971564348123", email: "mdjakarianeloy630@gmail.com", joinDate: "2026-10-13", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-011", passwordSet: false },
    { id: "M26-012", name: "Md Alauddin-1", mobile: "01867770609", email: "smalauddinbd2021@gmail.com", joinDate: "2026-10-14", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-012", passwordSet: false },
    { id: "M26-013", name: "Md Alauddin-2", mobile: "01867770609", email: "smalauddinbd2021@gmail.com", joinDate: "2026-10-15", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-013", passwordSet: false },
    { id: "M26-014", name: "Abdul awal-1", mobile: "+9710522363575", email: "abdulawal2013abudhabe@gmail.com", joinDate: "2026-10-16", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-014", passwordSet: false },
    { id: "M26-015", name: "Abdul awal-2", mobile: "+9710522363575", email: "abdulawal2013abudhabe@gmail.com", joinDate: "2026-10-17", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-015", passwordSet: false },
    { id: "M26-016", name: "Md Mojahid Hossain Sunny", mobile: "01794719323", email: "mhssunny482@gmail.com", joinDate: "2026-10-18", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-016", passwordSet: false },
    { id: "M26-017", name: "Nor Jaman", mobile: "1888259264", email: "mdnorjamal407@gmail.com", joinDate: "2026-10-28", status: "সক্রিয়", totalDeposit: 0, totalUnits: 0, username: "m26-017", passwordSet: false }
  ],
  deposits: [
    { id: "DEP-001", memberId: "M26-009", memberName: "Md. Abdulla", date: "2026-11-01", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "ব্যাংক ট্রান্সফার", receipt: "", note: "[ইমেইল প্রেরিত]", invoiceSent: true },
    { id: "DEP-002", memberId: "M26-001", memberName: "Muhammad Sohel-1", date: "2026-11-05", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "বিকাশ", receipt: "DK552Q8GI5", note: "রেজিষ্ট্রেশন ফি: ১০০ টাকা আদায় ✔ [ইমেইল প্রেরিত]", invoiceSent: true },
    { id: "DEP-003", memberId: "M26-002", memberName: "Muhammad Sohel-2", date: "2026-11-05", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "বিকাশ", receipt: "DK552Q8GI5", note: "রেজিষ্ট্রেশন ফি: ১০০ টাকা আদায় ✔ [ইমেইল প্রেরিত]", invoiceSent: true },
    { id: "DEP-004", memberId: "M26-003", memberName: "Muhammad Sohel-3", date: "2026-11-05", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "বিকাশ", receipt: "DK552Q8GI5", note: "রেজিষ্ট্রেশন ফি: ১০০ টাকা আদায় ✔ [ইমেইল প্রেরিত]", invoiceSent: true },
    { id: "DEP-005", memberId: "M26-006", memberName: "Md Nure Alam-1", date: "2026-11-05", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "ব্যাংক ট্রান্সফার", receipt: "9626110500032062", note: "Cellfin payment; রেজিষ্ট্রেশন ফি: ১০০ টাকা আদায় ✔ [ইমেইল প্রেরিত]", invoiceSent: true },
    { id: "DEP-006", memberId: "M26-007", memberName: "Md Nure alam-2", date: "2026-11-05", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "ব্যাংক ট্রান্সফার", receipt: "9626110500032062", note: "Cellfin payment; রেজিষ্ট্রেশন ফি: ১০০ টাকা আদায় ✔ [ইমেইল প্রেরিত]", invoiceSent: true },
    { id: "DEP-007", memberId: "M26-009", memberName: "Md. Abdulla", date: "2026-11-05", amount: 1000, unitPrice: 1000, units: 1, month: "নভেম্বর ২০২৬", status: "অনুমোদিত", method: "ক্যাশ/হাতে হাতে", receipt: "", note: "রেজিষ্ট্রেশন ফি: ১০০ টাকা আদায় ✔ [ইমেইল প্রেরিত]", invoiceSent: true }
  ],
  transactions: [],
  investments: [],
  meetings: [],
  actions: [
    { id: "ACT-001", meetingRef: "সভা #০১", description: "সকল সদস্যের জাতীয় পরিচয়পত্র ও ছবি সংগ্রহ ও যাচাই", assignee: "Md. Abdulla", priority: "সাধারণ", deadline: "2026-11-05", status: "চলমান", note: "সকল সদস্যের নথি প্রস্তুত", completedDate: "" },
    { id: "ACT-002", meetingRef: "সভা #০১", description: "ব্যবসায়ের নতুন ব্যাংক অ্যাকাউন্ট খোলার প্রক্রিয়া সম্পন্ন করা", assignee: "Md. Abdulla", priority: "জরুরি", deadline: "2026-10-15", status: "চলমান", note: "ব্যাংক ফরম সংগ্রহ করা হয়েছে", completedDate: "" },
    { id: "ACT-003", meetingRef: "সভা #০১", description: "অক্টোবর মাসের মাসিক সঞ্চয় জমার হিসাব চূড়ান্তকরণ", assignee: "Md. Abdulla", priority: "উচ্চ", deadline: "2026-10-14", status: "চলমান", note: "সদস্য রিপোর্ট যাচাই চলছে", completedDate: "" },
    { id: "ACT-004", meetingRef: "সভা #০১", description: "নতুন সম্ভাব্য বিনিয়োগ প্রকল্পগুলোর সম্ভাব্যতা যাচাই রিপোর্ট প্রস্তুত", assignee: "t-2", priority: "জরুরি", deadline: "2026-10-25", status: "শুরু হয়নি", note: "বাজার বিশ্লেষণ বাকি", completedDate: "" },
    { id: "ACT-005", meetingRef: "সভা #০১", description: "ইনভয়েস ও ডিজিটাল ভাউচার টেমপ্লেট অনুমোদন", assignee: "t-3", priority: "সাধারণ", deadline: "2026-10-18", status: "চলমান", note: "খসড়া পর্যালোচনাধীন", completedDate: "" },
    { id: "ACT-006", meetingRef: "সভা #০১", description: "ত্রৈমাসিক আর্থিক নিরীক্ষার জন্য অভ্যন্তরীণ কমিটি গঠন", assignee: "t-4", priority: "জরুরি", deadline: "2026-10-30", status: "শুরু হয়নি", note: "পরবর্তী সভায় উপস্থাপন", completedDate: "" },
    { id: "ACT-007", meetingRef: "সভা #০১", description: "সেপ্টেম্বর মাসের আয়-ব্যয় ভাউচার মিলকরণ", assignee: "t-5", priority: "সাধারণ", deadline: "2026-10-08", status: "চলমান", note: "ভাউচার রসিদ সংগ্রহ বাকি", completedDate: "" },
    { id: "ACT-008", meetingRef: "সভা #০১", description: "সদস্যদের সাথে জরুরি অনলাইন মতবিনিময় সভা আহ্বান", assignee: "t-6", priority: "জরুরি", deadline: "2026-10-20", status: "শুরু হয়নি", note: "লিংক পাঠানো বাকি", completedDate: "" },
    { id: "ACT-009", meetingRef: "সভা #০১", description: "সংগঠনের অফিসিয়াল সিল ও প্যাড তৈরি", assignee: "Md. Abdulla", priority: "জরুরি", deadline: "2026-10-07", status: "সম্পন্ন", note: "প্যাকেজ সরবরাহ গ্রহণ সম্পন্ন", completedDate: "2026-10-06" }
  ],
  emailLog: [
    { to: "mdabdulla1943@gmail.com", depositId: "DEP-001", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" },
    { to: "muhammadsohal@gmail.com", depositId: "DEP-002", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" },
    { to: "muhammadsohal@gmail.com", depositId: "DEP-003", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" },
    { to: "muhammadsohal@gmail.com", depositId: "DEP-004", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" },
    { to: "nurealammd867@gmail.com", depositId: "DEP-005", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" },
    { to: "nurealammd867@gmail.com", depositId: "DEP-006", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" },
    { to: "mdabdulla1943@gmail.com", depositId: "DEP-007", date: "2026-11-06", status: "sent (পুরনো শিটে প্রেরিত)", error: "" }
  ]
};
