
const records=[
    {
      "id": 1,
      "name": "Samsung Galaxy S21",
      "category": "Smartphone",
      "brand": "Samsung",
      "price": 69999,
      "stock": 25,
      "image": "../public/samsungPhone.jpg",
      "description": "A premium smartphone with an exceptional camera, powerful performance, and a sleek design."
    },
    {
      "id": 2,
      "name": "Apple MacBook Air M1",
      "category": "Laptop",
      "brand": "Apple",
      "price": 92999,
      "stock": 15,
      "image": "../public/appleLaptop.jpg",
      "description": "Lightweight and fast, this laptop is powered by the M1 chip, offering seamless performance."
    },
    {
      "id": 3,
      "name": "Sony WH-1000XM4",
      "category": "Headphones",
      "brand": "Sony",
      "price": 24999,
      "stock": 30,
      "image": "../public/sonyHeadphone.jpg",
      "description": "Industry-leading noise-canceling headphones with superior sound quality and a comfortable fit."
    },
    {
      "id": 4,
      "name": "Dell Inspiron 15",
      "category": "Laptop",
      "brand": "Dell",
      "price": 55999,
      "stock": 20,
      "image": "../public/dellLaptop.jpg",
      "description": "A reliable laptop with a vibrant display, and entertainment, packed with excellent performance."
    },
    {
      "id": 5,
      "name": "LG 4K Smart TV",
      "category": "Television",
      "brand": "LG",
      "price": 49999,
      "stock": 10,
      "image": "../public/lgTvimg.jpg",
      "description": "A 55-inch 4K UHD Smart TV offering stunning visuals and built-in apps for seamless entertainment."
    },
    {
      "id": 6,
      "name": "Bose SoundLink Mini II",
      "category": "Speaker",
      "brand": "Bose",
      "price": 18999,
      "stock": 18,
      "image": "../public/boseSpeaker.webp",
      "description": "Compact and portable Bluetooth speaker delivering deep bass and high-quality audio performance."
    },
    {
      "id": 7,
      "name": "Apple iPad Pro",
      "category": "Tablet",
      "brand": "Apple",
      "price": 79999,
      "stock": 12,
      "image": "../public/appleTablate.jpg",
      "description": "A high-performance tablet with a Liquid Retina display, perfect for creativity and productivity."
    },
    {
      "id": 8,
      "name": "HP Pavilion Gaming",
      "category": "Laptop",
      "brand": "HP",
      "price": 75999,
      "stock": 10,
      "image": "../public/hp-laptop-img.jpg",
      "description": "A powerful gaming laptop with a sleek design, featuring high-end graphics and fast performance."
    },
    {
      "id": 9,
      "name": "Canon EOS 1500D",
      "category": "Camera",
      "brand": "Canon",
      "price": 34999,
      "stock": 8,
      "image": "../public/canon-icamera-mg.webp",
      "description": "A DSLR camera ideal for photography enthusiasts, featuring excellent image quality."
    },
    {
      "id": 10,
      "name": "Fitbit Charge 5",
      "category": "Fitness Tracker",
      "brand": "Fitbit",
      "price": 13999,
      "stock": 40,
      "image": "../public/Fitbit-img.webp",
      "description": "An advanced fitness tracker with heart rate monitoring, sleep tracking, and built-in GPS."
    },
    {
      "id": 11,
      "name": "Logitech MX Master 3",
      "category": "Mouse",
      "brand": "Logitech",
      "price": 9999,
      "stock": 35,
      "image": "../public/logitechMouse.jpg",
      "description": "A high-precision wireless mouse with ergonomic design, perfect for productivity and multitasking."
  },
  {
      "id": 12,
      "name": "Amazon Echo Dot (4th Gen)",
      "category": "Smart Speaker",
      "brand": "Amazon",
      "price": 4499,
      "stock": 50,
      "image": "../public/echoDot.jpg",
      "description": "A compact smart speaker with Alexa, perfect for controlling smart devices and entertainment."
  }
  ]
  


   // GET METHOD
   export const GET = async () => {
   
      return new Response(JSON.stringify(records), {status: 200, headers: { 'Content-Type': 'application/json' }});
   }


  // //POST METHOD
  //  export const POST = async (request: Request) => {
  //     const body = await request.json();
  //     console.log("body is:", body);
  //     records.push({ id: records.length + 1, ...body });

  //     return new Response(JSON.stringify(records), { status: 201, headers: { 'Content-Type': 'application/json' } });
  //  }
