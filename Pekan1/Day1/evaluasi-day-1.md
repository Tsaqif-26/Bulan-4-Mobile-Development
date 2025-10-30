
1. Proses Pembuatan, pengujian dan pengrawatan Aplikasi Mobile, yang difokuskan untuk para pengguna yang menggunakan mobile (android/ios), dan outputnya berupa aplikasi yang bisa di download di playstore/appstore.

2. Web dev berfokus pada pembuatan web dan jika mobile dev berfokus pada aplikasi yang bisa diakses mengggunakan beberapa platform mobile, dan untuk aksesnya web sangat terbatas yaitu berupa API browser, sedangkan mobile lebih banyak lagi seperti kamera, GPS, sensor, background tasks, dan untuk perbedaan implikasinya mungkin jika mobile menuntut pengelolaan izin, sedangkan web tidak.

3. untuk discovery dan requirement mobile harus Mengidentifikasi masalah bisnis utama dan menentukan target platform (Android/iOS) berdasarkan audiens dan pasar dan juga Mendefinisikan use-case inti, alur pengguna, serta kebutuhan fungsional seperti dukungan offline atau online, termasuk analisis risiko awal dan prioritas fitur.

4. Perancangan Arsitektur ditujukan agar keseluruhan struktu aplikasi hanya menggunakan 1 pendekatan pengembangan dan juga agar bisa cepat menangani jika ada masalah error atau kesalahan teknis lainnya

5. Native development lebih baik karena memang dirancang khusus untuk mobile, jika dibandingkan dengan hybrid development yang fokus aslinya adalah web yang diubah agar bisa diakses di mobile, untuk keuntungan native adalah karena performa bisa maksimal karena bisa mengakses langsung ke hardware, dan kekurangannya memerlukan waktu dan biaya yang tidak sedikit dan juga Terlalu susah untuk developer awam, dan keuntungan hybrid waktu dan biaya relatif lebih dikit dan juga aman bagi developer awam, dan kekurangannya performa kurang dan juga kadang menyebabkan lag pada interaksi kompleks

6. Cross-Platform Native Development memungkinkan kita untuk membuat aplikasi hanya menggunakan satu basis kode tunggal saja ,berbeda dengan native yang menggunakan 2 code yang terpisah dan keuntungannya bisa mendapatkan performa seperti native tetapi dengan biaya yang lebih rendah, tetapi kekurangannya saat ada error atau debugging ,penangannya lebih rumit karena harus melibatkan 2 layer(native dan JS)

7. React Native adalah framework dengan filosfi dan syntax yang mirip dengan ReactJS tapi tetap ada perbedaan, seperti target , jika React native fokus pada komponen UI Native sedangkan ReactJS pada DOM, styling juga berbeda jika React native menggunakan javaScript Object sedangkan ReactJs pakai CSS, Komponen juga beda ,tapi untuk syntax Dasar sama yaitu JSX.

8. tantangan mobile development mungkin lebih banyak dibandingkan web development, seperti distribusi yang agak ribet ,update yang lebih lambat dan juga Mobile lebih kompleks dan harus optimal di banyak device, dan React Native dapat menyelesaikan masalah ini dengan, Satu codebase untuk Android dan iOS, UI native, Akses fitur perangkat lewat bridge, dan Komunitas besar & banyak library siap pakai.

9. tahap pengujian React Native ada, Unit test, Snapshot test, E2E test dan manual test, dan untuk Build, Android pakai Gradle (apk/aab) dan iOS pakai Xcode (ipa), Signing, Android pakai keystore dan iOS pakai sertifikat Apple, dan terakhir Release yaitu, Upload ke Play Store/App Store, pantau crash dan juga feedback via Firebase/Sentry.

10. karena React Native Bisa mendapatkan performa seperti native development tetapi dengan biaya dan waktu relatif lebih sedikit dan juga aman untuk development awam karena mirip dengan ReactJS dan juga Komunitasnya lebih besar, walau kekurangannya yaitu pengelolaan dan penjagaan sistemnya lebih kompleks dan lebih sulit untuk cepat diselesaikan karena menggunakan 2 layer (Js dan Native). 