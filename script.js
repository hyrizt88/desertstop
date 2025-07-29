// Global variables for order management
let orderItems = [];
let orderTotal = 0;
let currentLanguage = 'ms';
let purchaseCount = 0;
let hasCoupon = false;

// User management variables
let currentUser = null;
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};

// Language translations
const translations = {
    ms: {
        // Header
        restaurant_name: "Dessert Stop Restaurant",
        motto: "Makanan Enak Dari Hati",
        owner: "Pemilik",
        
        // Navigation
        all_menu: "Semua Menu",
        cakes: "Kek",
        fried_food: "Masakan Goreng",
        hot_food: "Masakan Panas",
        breakfast: "Sarapan",
        bread: "Roti",
        drinks: "Minuman",
        
        // Order
        your_order: "Pesanan Anda",
        total: "Jumlah",
        clear: "Kosongkan",
        place_order: "Buat Pesanan",
        add: "Tambah",
        
        // Menu Items
        chocolate_cake: "Kek Coklat",
        chocolate_cake_desc: "Kek coklat lembut dengan lapisan krim",
        vanilla_cake: "Kek Vanilla",
        vanilla_cake_desc: "Kek vanilla klasik dengan buttercream",
        red_velvet_cake: "Kek Red Velvet",
        red_velvet_cake_desc: "Kek merah dengan cream cheese frosting",
        fried_chicken: "Ayam Goreng",
        fried_chicken_desc: "Ayam goreng rangup dengan rempah khas",
        fried_fish: "Ikan Goreng",
        fried_fish_desc: "Ikan goreng dengan sambal belacan",
        fried_prawns: "Udang Goreng",
        fried_prawns_desc: "Udang goreng tepung dengan sos cili",
        fried_rice: "Nasi Goreng",
        fried_rice_desc: "Nasi goreng dengan telur dan sayur",
        fried_noodles: "Mee Goreng",
        fried_noodles_desc: "Mee goreng dengan udang dan sayur",
        chicken_curry: "Kari Ayam",
        chicken_curry_desc: "Kari ayam dengan nasi putih",
        fried_egg: "Telur Goreng",
        fried_egg_desc: "Telur goreng dengan roti bakar",
        toast_bread: "Roti Bakar",
        toast_bread_desc: "Roti bakar dengan mentega dan kaya",
        breakfast_set: "Set Sarapan",
        breakfast_set_desc: "Telur, roti bakar, dan kopi",
        roti_canai: "Roti Canai",
        roti_canai_desc: "Roti canai dengan kari dhal",
        roti_telur: "Roti Telur",
        roti_telur_desc: "Roti dengan telur dan bawang",
        roti_sardin: "Roti Sardin",
        roti_sardin_desc: "Roti dengan sardin dan bawang",
        kopi_o: "Kopi O",
        kopi_o_desc: "Kopi hitam tradisional",
        teh_tarik: "Teh Tarik",
        teh_tarik_desc: "Teh tarik dengan susu pekat",
        lime_water: "Air Limau",
        lime_water_desc: "Air limau nipis segar",
        sirap_bandung: "Sirap Bandung",
        sirap_bandung_desc: "Sirap bandung dengan susu",
        
        // Payment
        payment_info: "Maklumat Pembayaran",
        account: "Akaun",
        name: "Nama",
        note: "Nota",
        payment_note: "Sila hantar bukti pembayaran melalui WhatsApp selepas membuat pembayaran.",
        
        // Contact
        contact_ordering: "Tempahan & Pertanyaan",
        contact_desc: "Untuk tempahan atau pertanyaan, sila hubungi:",
        phone: "Telefon",
        opening_hours: "Buka",
        
        // Modal
        your_name: "Nama Anda:",
        phone_number: "Nombor Telefon:",
        delivery_address: "Alamat Penghantaran:",
        delivery_time: "Masa Penghantaran:",
        payment_method: "Kaedah Pembayaran:",
        select_payment: "Pilih kaedah pembayaran",
        order_summary: "Ringkasan Pesanan:",
        cancel: "Batal",
        send_to_whatsapp: "Hantar Pesanan ke WhatsApp",
        
        // Footer
        all_rights_reserved: "Semua hak cipta terpelihara.",
        made_with_love: "Dibuat dengan ❤️ oleh Faris Fox",
        
        // Loyalty Program
        loyalty_program: "Program Setia",
        buy_3_get_free: "Beli 3 Kali = Free Drinks + Cake 1 Slice",
        loyalty_desc: "Setiap pembelian ke-3, dapatkan minuman percuma + sepotong kek!",
        purchases: "Pembelian",
        free_coupon: "Kupon Percuma",
        coupon_desc: "Tebus kupon ini untuk dapatkan:",
        free_drink: "Minuman percuma (pilihan anda)",
        free_cake_slice: "Sepotong kek (pilihan anda)",
        redeem_now: "Tebus Sekarang",
        redeem_coupon: "Tebus Kupon",
        free_rewards: "Hadiah Percuma",
        choose_free_items: "Pilih item percuma anda:",
        free_drink_choice: "Pilih Minuman Percuma:",
        free_cake_choice: "Pilih Kek Percuma:",
        coupon_note: "Kupon ini akan ditambah ke dalam pesanan anda dan akan dihantar bersama pesanan lain.",
        add_to_order: "Tambah ke Pesanan",
        
        // Registration
        join_loyalty: "Sertai Program Setia",
        registration_desc: "Daftar dengan nombor telefon anda untuk mengesan pembelian dan dapatkan kupon percuma!",
        register_now: "Daftar Sekarang",
        welcome_back: "Selamat Datang Kembali",
        logout: "Log Keluar"
    },
    
    en: {
        // Header
        restaurant_name: "Dessert Stop Restaurant",
        motto: "Delicious Food From The Heart",
        owner: "Owner",
        
        // Navigation
        all_menu: "All Menu",
        cakes: "Cakes",
        fried_food: "Fried Food",
        hot_food: "Hot Food",
        breakfast: "Breakfast",
        bread: "Bread",
        drinks: "Drinks",
        
        // Order
        your_order: "Your Order",
        total: "Total",
        clear: "Clear",
        place_order: "Place Order",
        add: "Add",
        
        // Menu Items
        chocolate_cake: "Chocolate Cake",
        chocolate_cake_desc: "Soft chocolate cake with cream layers",
        vanilla_cake: "Vanilla Cake",
        vanilla_cake_desc: "Classic vanilla cake with buttercream",
        red_velvet_cake: "Red Velvet Cake",
        red_velvet_cake_desc: "Red cake with cream cheese frosting",
        fried_chicken: "Fried Chicken",
        fried_chicken_desc: "Crispy fried chicken with special spices",
        fried_fish: "Fried Fish",
        fried_fish_desc: "Fried fish with belacan sauce",
        fried_prawns: "Fried Prawns",
        fried_prawns_desc: "Breaded prawns with chili sauce",
        fried_rice: "Fried Rice",
        fried_rice_desc: "Fried rice with egg and vegetables",
        fried_noodles: "Fried Noodles",
        fried_noodles_desc: "Fried noodles with prawns and vegetables",
        chicken_curry: "Chicken Curry",
        chicken_curry_desc: "Chicken curry with white rice",
        fried_egg: "Fried Egg",
        fried_egg_desc: "Fried egg with toast",
        toast_bread: "Toast Bread",
        toast_bread_desc: "Toast with butter and kaya",
        breakfast_set: "Breakfast Set",
        breakfast_set_desc: "Egg, toast, and coffee",
        roti_canai: "Roti Canai",
        roti_canai_desc: "Roti canai with dhal curry",
        roti_telur: "Roti Telur",
        roti_telur_desc: "Bread with egg and onion",
        roti_sardin: "Roti Sardin",
        roti_sardin_desc: "Bread with sardine and onion",
        kopi_o: "Kopi O",
        kopi_o_desc: "Traditional black coffee",
        teh_tarik: "Teh Tarik",
        teh_tarik_desc: "Pulled tea with condensed milk",
        lime_water: "Lime Water",
        lime_water_desc: "Fresh lime juice",
        sirap_bandung: "Sirap Bandung",
        sirap_bandung_desc: "Rose syrup with milk",
        
        // Payment
        payment_info: "Payment Information",
        account: "Account",
        name: "Name",
        note: "Note",
        payment_note: "Please send payment proof via WhatsApp after making payment.",
        
        // Contact
        contact_ordering: "Orders & Inquiries",
        contact_desc: "For orders or inquiries, please contact:",
        phone: "Phone",
        opening_hours: "Open",
        
        // Modal
        your_name: "Your Name:",
        phone_number: "Phone Number:",
        delivery_address: "Delivery Address:",
        delivery_time: "Delivery Time:",
        payment_method: "Payment Method:",
        select_payment: "Select payment method",
        order_summary: "Order Summary:",
        cancel: "Cancel",
        send_to_whatsapp: "Send Order to WhatsApp",
        
        // Footer
        all_rights_reserved: "All rights reserved.",
        made_with_love: "Made with ❤️ by Faris Fox",
        
        // Loyalty Program
        loyalty_program: "Loyalty Program",
        buy_3_get_free: "Buy 3 Times = Free Drinks + Cake 1 Slice",
        loyalty_desc: "Every 3rd purchase, get a free drink + cake slice!",
        purchases: "Purchases",
        free_coupon: "Free Coupon",
        coupon_desc: "Redeem this coupon to get:",
        free_drink: "Free drink (your choice)",
        free_cake_slice: "Cake slice (your choice)",
        redeem_now: "Redeem Now",
        redeem_coupon: "Redeem Coupon",
        free_rewards: "Free Rewards",
        choose_free_items: "Choose your free items:",
        free_drink_choice: "Choose Free Drink:",
        free_cake_choice: "Choose Free Cake:",
        coupon_note: "This coupon will be added to your order and sent together with other items.",
        add_to_order: "Add to Order",
        
        // Registration
        join_loyalty: "Join Loyalty Program",
        registration_desc: "Register with your phone number to track purchases and get free coupons!",
        register_now: "Register Now",
        welcome_back: "Welcome Back",
        logout: "Logout"
    },
    
    zh: {
        // Header
        restaurant_name: "甜点站餐厅",
        motto: "用心制作的美食",
        owner: "店主",
        
        // Navigation
        all_menu: "所有菜单",
        cakes: "蛋糕",
        fried_food: "炸食",
        hot_food: "热食",
        breakfast: "早餐",
        bread: "面包",
        drinks: "饮料",
        
        // Order
        your_order: "您的订单",
        total: "总计",
        clear: "清空",
        place_order: "下单",
        add: "添加",
        
        // Menu Items
        chocolate_cake: "巧克力蛋糕",
        chocolate_cake_desc: "柔软的巧克力蛋糕配奶油层",
        vanilla_cake: "香草蛋糕",
        vanilla_cake_desc: "经典香草蛋糕配奶油",
        red_velvet_cake: "红丝绒蛋糕",
        red_velvet_cake_desc: "红色蛋糕配奶油芝士霜",
        fried_chicken: "炸鸡",
        fried_chicken_desc: "香脆炸鸡配特制香料",
        fried_fish: "炸鱼",
        fried_fish_desc: "炸鱼配虾酱",
        fried_prawns: "炸虾",
        fried_prawns_desc: "裹粉炸虾配辣椒酱",
        fried_rice: "炒饭",
        fried_rice_desc: "炒饭配蛋和蔬菜",
        fried_noodles: "炒面",
        fried_noodles_desc: "炒面配虾和蔬菜",
        chicken_curry: "咖喱鸡",
        chicken_curry_desc: "咖喱鸡配白饭",
        fried_egg: "煎蛋",
        fried_egg_desc: "煎蛋配吐司",
        toast_bread: "烤面包",
        toast_bread_desc: "烤面包配黄油和咖椰",
        breakfast_set: "早餐套餐",
        breakfast_set_desc: "蛋、烤面包和咖啡",
        roti_canai: "印度煎饼",
        roti_canai_desc: "印度煎饼配豆咖喱",
        roti_telur: "蛋面包",
        roti_telur_desc: "面包配蛋和洋葱",
        roti_sardin: "沙丁鱼面包",
        roti_sardin_desc: "面包配沙丁鱼和洋葱",
        kopi_o: "黑咖啡",
        kopi_o_desc: "传统黑咖啡",
        teh_tarik: "拉茶",
        teh_tarik_desc: "拉茶配炼乳",
        lime_water: "青柠水",
        lime_water_desc: "新鲜青柠汁",
        sirap_bandung: "玫瑰奶",
        sirap_bandung_desc: "玫瑰糖浆配牛奶",
        
        // Payment
        payment_info: "付款信息",
        account: "账户",
        name: "姓名",
        note: "注意",
        payment_note: "付款后请通过WhatsApp发送付款证明。",
        
        // Contact
        contact_ordering: "订餐和咨询",
        contact_desc: "如需订餐或咨询，请联系：",
        phone: "电话",
        opening_hours: "营业时间",
        
        // Modal
        your_name: "您的姓名：",
        phone_number: "电话号码：",
        delivery_address: "送货地址：",
        delivery_time: "送货时间：",
        payment_method: "付款方式：",
        select_payment: "选择付款方式",
        order_summary: "订单摘要：",
        cancel: "取消",
        send_to_whatsapp: "发送订单到WhatsApp",
        
        // Footer
        all_rights_reserved: "版权所有。",
        made_with_love: "由Faris Fox用心制作 ❤️",
        
        // Loyalty Program
        loyalty_program: "忠诚度计划",
        buy_3_get_free: "购买3次 = 免费饮料 + 蛋糕1片",
        loyalty_desc: "每第3次购买，获得免费饮料 + 蛋糕片！",
        purchases: "购买次数",
        free_coupon: "免费优惠券",
        coupon_desc: "兑换此优惠券获得：",
        free_drink: "免费饮料（您的选择）",
        free_cake_slice: "蛋糕片（您的选择）",
        redeem_now: "立即兑换",
        redeem_coupon: "兑换优惠券",
        free_rewards: "免费奖励",
        choose_free_items: "选择您的免费物品：",
        free_drink_choice: "选择免费饮料：",
        free_cake_choice: "选择免费蛋糕：",
        coupon_note: "此优惠券将添加到您的订单中，与其他物品一起发送。",
        add_to_order: "添加到订单",
        
        // Registration
        join_loyalty: "加入忠诚度计划",
        registration_desc: "用您的电话号码注册以跟踪购买并获得免费优惠券！",
        register_now: "立即注册",
        welcome_back: "欢迎回来",
        logout: "登出"
    },
    
    ta: {
        // Header
        restaurant_name: "டெஸர்ட் ஸ்டாப் உணவகம்",
        motto: "இதயத்திலிருந்து வரும் சுவையான உணவு",
        owner: "உரிமையாளர்",
        
        // Navigation
        all_menu: "அனைத்து மெனு",
        cakes: "கேக்குகள்",
        fried_food: "வறுத்த உணவு",
        hot_food: "சூடான உணவு",
        breakfast: "காலை உணவு",
        bread: "ரொட்டி",
        drinks: "பானங்கள்",
        
        // Order
        your_order: "உங்கள் ஆர்டர்",
        total: "மொத்தம்",
        clear: "அழி",
        place_order: "ஆர்டர் செய்",
        add: "சேர்",
        
        // Menu Items
        chocolate_cake: "சாக்லேட் கேக்",
        chocolate_cake_desc: "மென்மையான சாக்லேட் கேக் கிரீம் அடுக்குடன்",
        vanilla_cake: "வெண்ணிலா கேக்",
        vanilla_cake_desc: "பாரம்பரிய வெண்ணிலா கேக் பட்டர் கிரீமுடன்",
        red_velvet_cake: "சிவப்பு வேல்வெட் கேக்",
        red_velvet_cake_desc: "சிவப்பு கேக் கிரீம் சீஸ் ஃப்ரோஸ்டிங்குடன்",
        fried_chicken: "வறுத்த கோழி",
        fried_chicken_desc: "மிருதுவான வறுத்த கோழி சிறப்பு மசாலாக்களுடன்",
        fried_fish: "வறுத்த மீன்",
        fried_fish_desc: "வறுத்த மீன் பெலாசான் சாஸுடன்",
        fried_prawns: "வறுத்த இறால்",
        fried_prawns_desc: "மாவு பூசிய வறுத்த இறால் மிளகாய் சாஸுடன்",
        fried_rice: "வறுத்த அரிசி",
        fried_rice_desc: "வறுத்த அரிசி முட்டை மற்றும் காய்கறிகளுடன்",
        fried_noodles: "வறுத்த நூடுல்ஸ்",
        fried_noodles_desc: "வறுத்த நூடுல்ஸ் இறால் மற்றும் காய்கறிகளுடன்",
        chicken_curry: "கோழி கறி",
        chicken_curry_desc: "கோழி கறி வெள்ளை அரிசியுடன்",
        fried_egg: "வறுத்த முட்டை",
        fried_egg_desc: "வறுத்த முட்டை ரொட்டியுடன்",
        toast_bread: "வறுத்த ரொட்டி",
        toast_bread_desc: "வறுத்த ரொட்டி வெண்ணெய் மற்றும் காயாவுடன்",
        breakfast_set: "காலை உணவு செட்",
        breakfast_set_desc: "முட்டை, வறுத்த ரொட்டி மற்றும் காபி",
        roti_canai: "ரொட்டி சனாய்",
        roti_canai_desc: "ரொட்டி சனாய் தால் கறியுடன்",
        roti_telur: "ரொட்டி தெலூர்",
        roti_telur_desc: "ரொட்டி முட்டை மற்றும் வெங்காயத்துடன்",
        roti_sardin: "ரொட்டி சார்டின்",
        roti_sardin_desc: "ரொட்டி சார்டின் மற்றும் வெங்காயத்துடன்",
        kopi_o: "காபி ஓ",
        kopi_o_desc: "பாரம்பரிய கருப்பு காபி",
        teh_tarik: "தே தாரிக்",
        teh_tarik_desc: "இழுக்கப்பட்ட தேநீர் கரண்ட்சுருட்டப்பட்ட பாலுடன்",
        lime_water: "எலுமிச்சை தண்ணீர்",
        lime_water_desc: "புதிய எலுமிச்சை சாறு",
        sirap_bandung: "சிராப் பண்டுங்",
        sirap_bandung_desc: "ரோஜா சிரப் பாலுடன்",
        
        // Payment
        payment_info: "பணம் செலுத்தும் தகவல்",
        account: "கணக்கு",
        name: "பெயர்",
        note: "குறிப்பு",
        payment_note: "பணம் செலுத்திய பிறகு WhatsApp மூலம் பணம் செலுத்திய சான்றை அனுப்பவும்.",
        
        // Contact
        contact_ordering: "ஆர்டர் மற்றும் விசாரணை",
        contact_desc: "ஆர்டர் அல்லது விசாரணைக்கு, தயவுசெய்து தொடர்பு கொள்ளவும்:",
        phone: "தொலைபேசி",
        opening_hours: "திறந்திருக்கும் நேரம்",
        
        // Modal
        your_name: "உங்கள் பெயர்:",
        phone_number: "தொலைபேசி எண்:",
        delivery_address: "விநியோக முகவரி:",
        delivery_time: "விநியோக நேரம்:",
        payment_method: "பணம் செலுத்தும் முறை:",
        select_payment: "பணம் செலுத்தும் முறையைத் தேர்ந்தெடுக்கவும்",
        order_summary: "ஆர்டர் சுருக்கம்:",
        cancel: "ரத்து",
        send_to_whatsapp: "WhatsApp-க்கு ஆர்டர் அனுப்பு",
        
        // Footer
        all_rights_reserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        made_with_love: "ஃபரிஸ் ஃபாக்ஸ் மூலம் ❤️ உடன் உருவாக்கப்பட்டது",
        
        // Loyalty Program
        loyalty_program: "விசுவாச திட்டம்",
        buy_3_get_free: "3 முறை வாங்க = இலவச பானங்கள் + கேக் 1 துண்டு",
        loyalty_desc: "ஒவ்வொரு 3வது வாங்குதலிலும், இலவச பானம் + கேக் துண்டு கிடைக்கும்!",
        purchases: "வாங்குதல்கள்",
        free_coupon: "இலவச கூப்பன்",
        coupon_desc: "இந்த கூப்பனை பயன்படுத்தி பெறுங்கள்:",
        free_drink: "இலவச பானம் (உங்கள் தேர்வு)",
        free_cake_slice: "கேக் துண்டு (உங்கள் தேர்வு)",
        redeem_now: "இப்போது பயன்படுத்து",
        redeem_coupon: "கூப்பன் பயன்படுத்து",
        free_rewards: "இலவச வெகுமதிகள்",
        choose_free_items: "உங்கள் இலவச பொருட்களைத் தேர்ந்தெடுக்கவும்:",
        free_drink_choice: "இலவச பானத்தைத் தேர்ந்தெடுக்கவும்:",
        free_cake_choice: "இலவச கேக்கைத் தேர்ந்தெடுக்கவும்:",
        coupon_note: "இந்த கூப்பன் உங்கள் ஆர்டரில் சேர்க்கப்பட்டு மற்ற பொருட்களுடன் அனுப்பப்படும்.",
        add_to_order: "ஆர்டரில் சேர்",
        
        // Registration
        join_loyalty: "விசுவாச திட்டத்தில் சேரவும்",
        registration_desc: "வாங்குதல்களை கண்காணிக்கவும் இலவச கூப்பன்களைப் பெறவும் உங்கள் தொலைபேசி எண்ணுடன் பதிவு செய்யவும்!",
        register_now: "இப்போது பதிவு செய்யவும்",
        welcome_back: "மீண்டும் வரவேற்கிறோம்",
        logout: "வெளியேறு"
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize language switcher
    initializeLanguageSwitcher();
    
    // Get all navigation buttons and menu items
    const navButtons = document.querySelectorAll('.nav-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Add success animation to button
            this.classList.add('success');
            setTimeout(() => {
                this.classList.remove('success');
            }, 500);
            
            // Filter menu items
            filterMenuItems(category);
        });
    });
    
    // Function to filter menu items
    function filterMenuItems(category) {
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                // Show item with animation
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.remove('hidden');
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                // Hide item with animation
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Add hover effects to menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        item.addEventListener('click', function() {
            this.classList.add('success');
            setTimeout(() => {
                this.classList.remove('success');
            }, 500);
        });
    });
    
    // Add smooth scrolling for navigation
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Smooth scroll to menu container
            const menuContainer = document.querySelector('.menu-container');
            menuContainer.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Add loading animation on page load
    window.addEventListener('load', function() {
        const container = document.querySelector('.container');
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s ease-out';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        header.style.transform = `translateY(${rate}px)`;
    });
    
    // Add search functionality
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Cari menu...';
        searchInput.className = 'search-input';
        
        const navMenu = document.querySelector('.nav-menu');
        navMenu.appendChild(searchInput);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            menuItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('.description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });
        });
    }
    
    // Initialize search functionality
    addSearchFunctionality();
    
    // Add contact button functionality
    const contactDetails = document.querySelectorAll('.contact-details p');
    contactDetails.forEach(detail => {
        detail.addEventListener('click', function() {
            this.classList.add('success');
            setTimeout(() => {
                this.classList.remove('success');
            }, 500);
            
            // If it's a phone number, try to initiate call
            if (this.textContent.includes('012-345-6789')) {
                if (confirm('Mahu panggil nombor ini?')) {
                    window.location.href = 'tel:012-345-6789';
                }
            }
            
            // If it's an email, try to open email client
            if (this.textContent.includes('info@dessertstop.com')) {
                if (confirm('Mahu hantar email?')) {
                    window.location.href = 'mailto:info@dessertstop.com';
                }
            }
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeButton = document.querySelector('.nav-btn.active');
        const buttons = Array.from(navButtons);
        const currentIndex = buttons.indexOf(activeButton);
        
        switch(e.key) {
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].click();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
                buttons[prevIndex].click();
                break;
            case 'Enter':
                if (document.activeElement.classList.contains('nav-btn')) {
                    document.activeElement.click();
                }
                break;
        }
    });
    
    // Add touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const activeButton = document.querySelector('.nav-btn.active');
            const buttons = Array.from(navButtons);
            const currentIndex = buttons.indexOf(activeButton);
            
            if (diff > 0) {
                // Swipe left - next category
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].click();
            } else {
                // Swipe right - previous category
                const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
                buttons[nextIndex].click();
            }
        }
    }
    
    // Add accessibility features
    navButtons.forEach(button => {
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
        button.setAttribute('aria-label', `Tunjukkan menu ${button.textContent}`);
    });
    
    menuItems.forEach(item => {
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', `Menu: ${item.querySelector('h3').textContent}`);
    });
    
    // Add performance optimization
    let ticking = false;
    
    function updateAnimations() {
        ticking = false;
        // Add any performance-heavy animations here
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Optimize scroll events
    window.addEventListener('scroll', requestTick);
    
    // Initialize modal functionality
    initializeModal();
    
    // Initialize loyalty program
    initializeLoyaltyProgram();
    
    // Check for existing user
    checkExistingUser();
    
    console.log('Dessert Stop Restaurant Menu loaded successfully! 🍰');
});

// Language Switcher Functions
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update search placeholder
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        const placeholders = {
            ms: 'Cari menu...',
            en: 'Search menu...',
            zh: '搜索菜单...',
            ta: 'மெனுவைத் தேடு...'
        };
        searchInput.placeholder = placeholders[lang] || 'Cari menu...';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Order Management Functions
function addToOrder(itemName, price) {
    // Check if item already exists in order
    const existingItem = orderItems.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        orderItems.push({
            name: itemName,
            price: price,
            quantity: 1,
            total: price
        });
    }
    
    // Update order total
    orderTotal = orderItems.reduce((sum, item) => sum + item.total, 0);
    
    // Update order summary display
    updateOrderSummary();
    
    // Show success animation
    const button = event.target;
    button.classList.add('success');
    setTimeout(() => {
        button.classList.remove('success');
    }, 500);
    
    // Show order summary if hidden
    const orderSummary = document.getElementById('orderSummary');
    if (orderSummary.style.display === 'none') {
        orderSummary.style.display = 'block';
        orderSummary.style.animation = 'fadeInUp 0.6s ease-out';
    }
}

function updateOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const orderTotalElement = document.getElementById('orderTotal');
    
    // Clear existing items
    orderItemsContainer.innerHTML = '';
    
    // Add each item to the summary
    orderItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>RM ${item.total.toFixed(2)}</span>
        `;
        orderItemsContainer.appendChild(itemElement);
    });
    
    // Update total
    orderTotalElement.textContent = orderTotal.toFixed(2);
}

function clearOrder() {
    orderItems = [];
    orderTotal = 0;
    updateOrderSummary();
    
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.style.display = 'none';
    
    // Show success message
    showNotification('Pesanan telah dikosongkan', 'success');
}

function placeOrder() {
    if (orderItems.length === 0) {
        showNotification('Sila tambah item ke dalam pesanan', 'error');
        return;
    }
    
    // Check if user is registered
    if (!currentUser) {
        showNotification('Sila daftar terlebih dahulu untuk membuat pesanan', 'error');
        return;
    }
    
    // Update modal with current order
    updateModalOrderSummary();
    
    // Show modal
    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';
    
    // Auto-fill customer name and phone
    document.getElementById('customerName').value = currentUser.name;
    document.getElementById('customerPhone').value = currentUser.phone;
}

function updateModalOrderSummary() {
    const modalOrderItems = document.getElementById('modalOrderItems');
    const modalOrderTotal = document.getElementById('modalOrderTotal');
    
    // Clear existing items
    modalOrderItems.innerHTML = '';
    
    // Add each item to the modal summary
    orderItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>RM ${item.total.toFixed(2)}</span>
        `;
        modalOrderItems.appendChild(itemElement);
    });
    
    // Update total
    modalOrderTotal.textContent = orderTotal.toFixed(2);
}

// Modal Functions
function initializeModal() {
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.close');
    const orderForm = document.getElementById('orderForm');
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Handle form submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrder();
    });
    
    // Set minimum delivery time (1 hour from now)
    const deliveryTimeInput = document.getElementById('deliveryTime');
    const now = new Date();
    const minTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
    deliveryTimeInput.min = minTime.toISOString().slice(0, 16);
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

function submitOrder() {
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (!customerName || !customerPhone || !deliveryAddress || !deliveryTime || !paymentMethod) {
        showNotification('Sila isi semua maklumat yang diperlukan', 'error');
        return;
    }
    
    // Format delivery time
    const deliveryDateTime = new Date(deliveryTime);
    const formattedDeliveryTime = deliveryDateTime.toLocaleString('ms-MY');
    
    // Create order message for WhatsApp
    let orderMessage = `🍰 *PESANAN BARU - DESSERT STOP RESTAURANT* 🍰\n\n`;
    orderMessage += `*Maklumat Pelanggan:*\n`;
    orderMessage += `Nama: ${customerName}\n`;
    orderMessage += `Telefon: ${customerPhone}\n`;
    orderMessage += `Alamat: ${deliveryAddress}\n`;
    orderMessage += `Masa Penghantaran: ${formattedDeliveryTime}\n`;
    orderMessage += `Kaedah Pembayaran: ${getPaymentMethodName(paymentMethod)}\n\n`;
    
    orderMessage += `*Pesanan:*\n`;
    orderItems.forEach(item => {
        orderMessage += `• ${item.name} x${item.quantity} = RM ${item.total.toFixed(2)}\n`;
    });
    
    orderMessage += `\n*Jumlah: RM ${orderTotal.toFixed(2)}*\n\n`;
    orderMessage += `*Maklumat Pembayaran:*\n`;
    orderMessage += getPaymentDetails(paymentMethod);
    orderMessage += `\n---\n`;
    orderMessage += `Sila hantar bukti pembayaran selepas membuat pembayaran.`;
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappNumber = '60123456789'; // ⚠️ TUKAR NOMBOR INI KEPADA NOMBOR WHATSAPP SEBENAR
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Increment purchase count for loyalty program
    purchaseCount++;
    updateLoyaltyProgress();
    saveUserProgress();
    
    // Close modal
    closeModal();
    
    // Clear order
    clearOrder();
    
    // Show success message
    showNotification('Pesanan telah dihantar ke WhatsApp!', 'success');
}

function getPaymentMethodName(method) {
    const methods = {
        'maybank': 'Maybank',
        'cimb': 'CIMB Bank',
        'tng': 'Touch \'n Go'
    };
    return methods[method] || method;
}

function getPaymentDetails(method) {
    const details = {
        'maybank': 'Maybank: 1234-5678-9012\nNama: FARIS FOX',
        'cimb': 'CIMB Bank: 8765-4321-0987\nNama: FARIS FOX',
        'tng': 'Touch \'n Go ID: 0123456789\nNama: FARIS FOX'
    };
    return details[method] || 'Sila pilih kaedah pembayaran';
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    } else {
        notification.style.backgroundColor = '#667eea';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Loyalty Program Functions
function updateLoyaltyProgress() {
    const progressFill = document.getElementById('loyaltyProgress');
    const purchaseCountElement = document.getElementById('purchaseCount');
    const couponSection = document.getElementById('couponSection');
    
    // Update purchase count display
    purchaseCountElement.textContent = purchaseCount;
    
    // Calculate progress percentage
    const progressPercentage = Math.min((purchaseCount / 3) * 100, 100);
    progressFill.style.width = progressPercentage + '%';
    
    // Check if customer earned a coupon
    if (purchaseCount >= 3 && !hasCoupon) {
        hasCoupon = true;
        couponSection.style.display = 'block';
        showNotification('🎉 Tahniah! Anda telah mendapat kupon percuma!', 'success');
        
        // Add celebration animation
        couponSection.style.animation = 'bounceIn 0.6s ease-out';
        
        // Save progress
        saveUserProgress();
    }
}

function redeemCoupon() {
    // Show coupon modal
    const couponModal = document.getElementById('couponModal');
    couponModal.style.display = 'block';
}

function closeCouponModal() {
    const couponModal = document.getElementById('couponModal');
    couponModal.style.display = 'none';
}

function confirmRedeemCoupon() {
    const freeDrinkChoice = document.getElementById('freeDrinkChoice').value;
    const freeCakeChoice = document.getElementById('freeCakeChoice').value;
    
    // Add free items to order
    addToOrder(freeDrinkChoice, 0);
    addToOrder(freeCakeChoice, 0);
    
    // Reset coupon status
    hasCoupon = false;
    purchaseCount = 0;
    updateLoyaltyProgress();
    saveUserProgress();
    
    // Hide coupon section
    document.getElementById('couponSection').style.display = 'none';
    
    // Close modal
    closeCouponModal();
    
    // Show success message
    showNotification('🎁 Kupon telah ditebus! Item percuma telah ditambah ke pesanan.', 'success');
}

// Initialize loyalty program on page load
function initializeLoyaltyProgram() {
    updateLoyaltyProgress();
    
    // Add event listeners for coupon modal
    const couponModal = document.getElementById('couponModal');
    const closeButtons = couponModal.querySelectorAll('.close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', closeCouponModal);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === couponModal) {
            closeCouponModal();
        }
    });
}

// User Management Functions
function registerUser() {
    const userName = document.getElementById('userName').value.trim();
    const userPhone = document.getElementById('userPhone').value.trim();
    
    if (!userName || !userPhone) {
        showNotification('Sila isi nama dan nombor telefon', 'error');
        return;
    }
    
    // Validate phone number format
    const phoneRegex = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/;
    if (!phoneRegex.test(userPhone.replace(/\s/g, ''))) {
        showNotification('Sila masukkan nombor telefon yang sah', 'error');
        return;
    }
    
    // Check if user already exists
    if (registeredUsers[userPhone]) {
        showNotification('Nombor telefon ini sudah didaftarkan', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        name: userName,
        phone: userPhone,
        purchaseCount: 0,
        hasCoupon: false,
        registrationDate: new Date().toISOString()
    };
    
    // Save user to localStorage
    registeredUsers[userPhone] = newUser;
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    // Set current user
    currentUser = newUser;
    
    // Show success message
    showNotification('Pendaftaran berjaya! Selamat datang ke Program Setia!', 'success');
    
    // Update UI
    updateUserInterface();
}

function loginUser(phone) {
    if (registeredUsers[phone]) {
        currentUser = registeredUsers[phone];
        updateUserInterface();
        showNotification(`Selamat datang kembali, ${currentUser.name}!`, 'success');
    }
}

function logoutUser() {
    currentUser = null;
    updateUserInterface();
    showNotification('Anda telah log keluar', 'info');
}

function updateUserInterface() {
    const registrationSection = document.getElementById('registrationSection');
    const userProfileSection = document.getElementById('userProfileSection');
    const loyaltySection = document.getElementById('loyaltySection');
    
    if (currentUser) {
        // User is logged in
        registrationSection.style.display = 'none';
        userProfileSection.style.display = 'block';
        loyaltySection.style.display = 'block';
        
        // Update user display
        document.getElementById('displayUserName').textContent = currentUser.name;
        document.getElementById('displayUserPhone').textContent = currentUser.phone;
        
        // Update loyalty progress
        purchaseCount = currentUser.purchaseCount;
        hasCoupon = currentUser.hasCoupon;
        updateLoyaltyProgress();
        
    } else {
        // User is not logged in
        registrationSection.style.display = 'block';
        userProfileSection.style.display = 'none';
        loyaltySection.style.display = 'none';
        
        // Clear form
        document.getElementById('userName').value = '';
        document.getElementById('userPhone').value = '';
    }
}

function saveUserProgress() {
    if (currentUser) {
        currentUser.purchaseCount = purchaseCount;
        currentUser.hasCoupon = hasCoupon;
        registeredUsers[currentUser.phone] = currentUser;
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }
}

// Check for existing user on page load
function checkExistingUser() {
    const savedUserPhone = localStorage.getItem('currentUserPhone');
    if (savedUserPhone && registeredUsers[savedUserPhone]) {
        loginUser(savedUserPhone);
    }
} 