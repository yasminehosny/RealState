# 🏠 Real Estate Web Platform

A full-featured real estate platform built with **Node.js**, **Express**, and **MongoDB**, allowing users to browse, add, book, and manage properties for rent or sale. The platform also includes a complete admin panel and supports online payments through **Paymob**.

---

## 🚀 Features

### 👤 User
- Register & Login
- Browse properties by category or type
- Book a property viewing
- Add/remove properties to favorites
- Send messages to property owners (chat)
- Receive notifications (booking status, responses, etc.)
- Rate and review properties
- Password recovery via email verification
- Contact admin via “Contact Us” form

### 🏡 Property Owner
- Add properties with images and details
- Pay required fees before listing (10% rent / 15% sale)
- Approve or reject booking requests
- Manage chats with clients per property
- See reviews from users

### 🛡️ Admin Panel
- Manage users and properties
- Manage bookings, reviews, categories, and messages
- Monitor client-owner conversations (read-only)

---

## 💳 Payment Integration
- Integrated with **Paymob API**
- Dynamic fee calculation based on property status
- Secure redirect to Paymob for payment processing

---

## 🧰 Technologies Used

| Area           | Tools/Technologies                        |
|----------------|-------------------------------------------|
| Backend        | Node.js, Express.js                       |
| Frontend       | EJS, HTML, CSS, Bootstrap                 |
| Database       | MongoDB, Mongoose                         |
| Authentication | bcrypt, express-session                   |
| File Upload    | multer                                    |
| Email          | nodemailer                                |
| Payment        | Paymob API, axios                         |

---

## 📈 Future Enhancements
- 🗺️ Google Maps/Leaflet integration to show property locations  
- 🧠 Dynamic pricing suggestions based on market trends  
- 📝 Per-property review system  
- 🧾 Downloadable PDF invoices for payments  
- 📲 Mobile app (Flutter/React Native)  
- 💳 Support for multiple payment methods (Fawry, Vodafone Cash, etc.)

---




