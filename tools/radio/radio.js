const radioStations = [
    {
        "id": "Y_OOEauq-U3AB9GcRyuee",
        "name": "Ujyaalo Radio Network",
        "streamUrl": "https://stream-151.zeno.fm/h527zwd11uquv",
        "frequency": 90.0,
        "address": "Ujyaalo Ghar (Behind Central Zoo), Lalitpur - 4, Shanti Chowk, Jawalakhel",
        "province": 3
    },
    {
        "id": "PpdCGSEQ44Ox4uLzlgcin",
        "name": "Radio Kantipur",
        "streamUrl": "https://radio-broadcast.ekantipur.com/stream",
        "frequency": 96.1,
        "address": "Subidhanagar,Tinkune, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "63DAluhRgl-PcYeixk5eY",
        "name": "Radio Nepal",
        "streamUrl": "http://stream1.radionepal.gov.np/live",
        "frequency": 100.0,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "KfKe5QlSGPSMjNS6j4OwC",
        "name": "BBC World Service English",
        "streamUrl": "https://a.files.bbci.co.uk/media/live/manifesto/audio/simulcast/hls/nonuk/sbr_vlow/ak/bbc_world_service_news_internet.m3u8",
        "frequency": null,
        "address": "London, UK"
    },
    {
        "id": "8tR2HH2NMt-h-pyog459v",
        "name": "BBC Nepali",
        "streamUrl": "https://a.files.bbci.co.uk/media/live/manifesto/audio/simulcast/hls/nonuk/sbr_low/ak/bbc_nepali_radio.m3u8",
        "frequency": 103.0,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "XIQtxSR27snR6vkvJD2Al",
        "name": "Kalika FM",
        "streamUrl": "https://streaming.softnep.net:10828/;stream.nsv&type=mp3&volume=70",
        "frequency": 95.2,
        "address": "Bharatpur-10, Chitwan",
        "province": 3
    },
    {
        "id": "hJ2I94Z16tp5n9OmAxva0",
        "name": "Nepali Radio Network",
        "streamUrl": "https://astream.nepalipatro.com.np:8239/index.html",
        "frequency": 99.1,
        "address": "Baneshwor Height Pipalbot Marga, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "E_k0M6NUzwIBU4i6is8Bz",
        "name": "Image FM",
        "streamUrl": "https://radio-stream-relay-us.hamropatro.com/radio/8020/radio.mp3",
        "frequency": 97.9,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "rlPmocaRrVIWIH1tG3H6l",
        "name": "Radio Audio",
        "streamUrl": "https://stream-161.zeno.fm/2w81t82wx3duv",
        "frequency": 106.3,
        "address": "Comedy Height Narayaneshor Marg-10, Baneshwor KTM",
        "province": 3
    },
    {
        "id": "p0qy74VnrANpCmab4YJ_i",
        "name": "Swadesh FM",
        "streamUrl": "https://stream-43.zeno.fm/xm2babvnephvv",
        "frequency": 93.2,
        "address": "Basantapur, Madi, Chitwan, Nepal",
        "province": 3
    },
    {
        "id": "WL4IaKwba1BpHxWdjZvuW",
        "name": "Radio Candid",
        "streamUrl": "https://radio-stream-relay-np.hamropatro.com/radio/8030/radio.mp3",
        "frequency": 92.7,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "oJtKkBrW6ZxwZ6mpOQa-d",
        "name": "Image News",
        "streamUrl": "https://radio-stream-relay-np.hamropatro.com/radio/8050/radio.mp3",
        "frequency": 103.6,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "gmJrziudHDkXK1NYJg11K",
        "name": "Hits FM",
        "streamUrl": "https://usa15.fastcast4u.com/proxy/hitsfm912?mp=/1",
        "frequency": 91.2,
        "address": "New Baneshwar, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "XoF2YnA5lSASjlAKxAxVA",
        "name": "Radio Sagarmatha",
        "streamUrl": "http://216.55.141.189:8004",
        "frequency": 102.4,
        "address": "Lalitpur, Nepal",
        "province": 3
    },
    {
        "id": "fjdlTdyDb17-suIFY-a6V",
        "name": "Radio Annapurna Nepal",
        "streamUrl": "http://stream.prixa.net:8000/annapurna",
        "frequency": 94.0,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "I1Jug5DZ_H02zOkR_vTJb",
        "name": "Synergy FM",
        "streamUrl": "https://live.itech.host:3880/stream",
        "frequency": 91.6,
        "address": "Bharatpur-10 Chitwan",
        "province": 3
    },
    {
        "id": "-f9nyHjiHr1hhgEgGde-U",
        "name": "Vijaya FM",
        "streamUrl": "https://live.itech.host:3320/stream",
        "frequency": 101.6,
        "address": "Gaindakot-8, Nawalparasi, Nepal",
        "province": 5
    },
    {
        "id": "d1PMbBlcy71dyFmIUSBMK",
        "name": "Radio Janata",
        "streamUrl": "http://streaming.hamropatro.com:8895",
        "frequency": 89.1,
        "address": "Janata Network Minbhawan Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "MDWPpV0SVpL9orCbeQL7K",
        "name": "Citizen FM",
        "streamUrl": "https://streaming.webhostnepal.com:7032/;",
        "frequency": 97.5,
        "address": "MI Complex, Jamal, Kathmandu",
        "province": 3
    },
    {
        "id": "6g5aK_OCZNmsr2OfE88-P",
        "name": "Music City - Nonstop Music",
        "streamUrl": "http://streaming.hamropatro.com:8739",
        "frequency": null,
        "address": null
    },
    {
        "id": "hzQLwASZSbR9xc_zT0tMh",
        "name": "SaptaKoshi FM 90.0 MHz",
        "streamUrl": "https://live.itech.host:4535/stream",
        "frequency": 90.0,
        "address": "Ithari-8, Sunsari, Nepal",
        "province": 1
    },
    {
        "id": "GGsFIWQfHG6qQjc4BKeE3",
        "name": "Radio Kathmandu",
        "streamUrl": "http://216.55.141.189:8088/;",
        "frequency": 92.1,
        "address": "Chabahil, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "w-xqQkq10wg-Fyxshi5C4",
        "name": "Nepaliko Radio",
        "streamUrl": "http://95.217.153.73:9888/",
        "frequency": 88.8,
        "address": "Koteshwor, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "HifZP7rq51i4QJvlFClTn",
        "name": "BODHI FM ",
        "streamUrl": "http://216.55.141.189:8721/;",
        "frequency": null,
        "address": "Texas, USA"
    },
    {
        "id": "0szzSsELRZyP2XmixgmUn",
        "name": "Radio Thaha Sanchar FM (Kathmandu)",
        "streamUrl": "http://streaming.softnep.net:8025",
        "frequency": 99.4,
        "address": "Babarmahal, Kathmandu",
        "province": 3
    },
    {
        "id": "oUwFc8m6AJjILdz2lMWAI",
        "name": "Radio Birgunj",
        "streamUrl": "http://216.55.141.189:8294/;",
        "frequency": 99.0,
        "address": "Murlibagaicha-12",
        "province": 2
    },
    {
        "id": "-x3uUlGN0hUB4EyuGaO6p",
        "name": "FM Adhyatma Jyoti",
        "streamUrl": "http://streaming.hamropatro.com:8074",
        "frequency": 104.8,
        "address": "Dillibazar, Kathmandu",
        "province": 3
    },
    {
        "id": "HXI4zAYGRAgGDVWrJLNR-",
        "name": "Nepal FM Network",
        "streamUrl": "http://streaming.hamropatro.com:8230",
        "frequency": 91.8,
        "address": "Kathmandu -14, Lampati",
        "province": 3
    },
    {
        "id": "jJpIBkFuwV23IRPOF_Zip",
        "name": "Radio City",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8036/stream",
        "frequency": 98.8,
        "address": "Maijubahal, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "7937eooqXAT_2U436bJ2v",
        "name": "Classic FM",
        "streamUrl": "http://streaming.hamropatro.com:8783",
        "frequency": 101.2,
        "address": "Jawalakhel, Lalitpur, Kathmandu",
        "province": 3
    },
    {
        "id": "0DwOEiB58ckJufbE8LM-K",
        "name": "Vijayapur Fm",
        "streamUrl": "https://live.itech.host:9479/stream",
        "frequency": 98.8,
        "address": "Dharan 10, Sainik Chowk",
        "province": 1
    },
    {
        "id": "XA67B5-3cd9dYmfEZ6xji",
        "name": "Radio Resunga",
        "streamUrl": "https://live.itech.host:3260/stream",
        "frequency": 106.2,
        "address": "Tamghas, Gulmi",
        "province": 5
    },
    {
        "id": "0VeUtBNBS-wttKle3ERji",
        "name": "Radio Bheri  FM 98.6 & 102.7 MHz",
        "streamUrl": "http://streaming.hamropatro.com:8313",
        "frequency": 98.6,
        "address": "Birendranagar-7, Surkhet",
        "province": 6
    },
    {
        "id": "LM_enGAagFchyHlVaBzzL",
        "name": "KEEPS FM",
        "streamUrl": "http://streaming.hamropatro.com:8385",
        "frequency": 98.3,
        "address": "Kuleshwor Awaschhetra",
        "province": 3
    },
    {
        "id": "k3TM7nhxH15YcYQJ-QVwQ",
        "name": "Antenna Foundation Nepal",
        "streamUrl": "http://streaming.hamropatro.com:8290",
        "frequency": null,
        "address": "Kathmandu, Nepal,",
        "province": 3
    },
    {
        "id": "VRBjPy-wHobyYrlrswY2h",
        "name": "Radio Taplejung",
        "streamUrl": "http://live.itech.host:9012/stream",
        "frequency": 94.0,
        "address": "Phungling-4, Taplejung",
        "province": 1
    },
    {
        "id": "jp9k0BBld0wYJJ3QL2cX8",
        "name": "BFM",
        "streamUrl": "http://216.55.141.189:8124/;",
        "frequency": 91.2,
        "address": "Biratnagar-7, Morang",
        "province": 1
    },
    {
        "id": "f9JnqjfBuwpTHfylTbGQJ",
        "name": "Radio Annapurna",
        "streamUrl": "https://live.itech.host:8969/stream",
        "frequency": 93.4,
        "address": "Gairapatnan, Pokhara",
        "province": 4
    },
    {
        "id": "PBZfOd9nzoP8hy44vY9LX",
        "name": "Radio Prakriti",
        "streamUrl": "http://streaming.hamropatro.com:8276",
        "frequency": 93.4,
        "address": "Tulsipur - 5 Salyan Road, Dang",
        "province": 5
    },
    {
        "id": "YWSPMLVxw7jvkKgiq5Hdv",
        "name": "Radio Nagarik",
        "streamUrl": "http://streaming.hamropatro.com:8789/",
        "frequency": 96.5,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "YWiaE-BtVZgE-FRWn7YIj",
        "name": "Everest FM",
        "streamUrl": "https://live.itech.host:5005/stream",
        "frequency": 93.0,
        "address": "Pokhara, Kaski",
        "province": 4
    },
    {
        "id": "Zl-axkaydGRY6_yHBBpoP",
        "name": "Community Radio Sky FM",
        "streamUrl": "http://streaming.hamropatro.com:8421",
        "frequency": 90.4,
        "address": "Tamghas, Gulmi",
        "province": 5
    },
    {
        "id": "KvGhkxXHt0YXgeaPTYG_c",
        "name": "Kalinchowk FM",
        "streamUrl": "http://streaming.softnep.net:8109/;",
        "frequency": 106.4,
        "address": "Charikot, Dolakh",
        "province": 3
    },
    {
        "id": "zDi_BW77aHDQWSdXBp0Yu",
        "name": "Radio Himalayan",
        "streamUrl": "http://stream.zeno.fm/9ghqvd62238uv",
        "frequency": 99.7,
        "address": "Nepal"
    },
    {
        "id": "d_P1h8_ssbHMa5M-405Pn",
        "name": "Radio Suseli",
        "streamUrl": "http://streaming.hamropatro.com:8443",
        "frequency": 106.3,
        "address": "Sundarharaicha 10 Municipality, Biratchowk, Morang",
        "province": 1
    },
    {
        "id": "tkz5PN265yPEQRRVqxQod",
        "name": "Khasyauli FM",
        "streamUrl": "http://streaming.softnep.net:8167/;",
        "frequency": 91.8,
        "address": "Rupandehi, Butwal",
        "province": 5
    },
    {
        "id": "U7ylk78O4f3hujNZCXaCP",
        "name": "Radio Ramaroshan",
        "streamUrl": "http://216.55.141.189:8621/;",
        "frequency": 92.0,
        "address": "Achham",
        "province": 7
    },
    {
        "id": "LbG6D9eqAk7R85B1khBti",
        "name": "Radio Mithila",
        "streamUrl": "http://streaming.hamropatro.com:8244",
        "frequency": 100.8,
        "address": "Janakpurdham, Dhanusa",
        "province": 2
    },
    {
        "id": "-sikpxUWz1mDGxkKDmuy5",
        "name": "Butwal FM",
        "streamUrl": "http://streaming.softnep.net:8003/;",
        "frequency": 94.4,
        "address": "Butwal-12, Kalikanager",
        "province": 5
    },
    {
        "id": "ww1XECtEp6KYGNXgjKPGn",
        "name": "Radio Tulsipur FM",
        "streamUrl": "http://streaming.hamropatro.com:8327",
        "frequency": 100.2,
        "address": "Nepalganj Road, Tulsipur, Dang, Nepal",
        "province": 5
    },
    {
        "id": "YyNITvEZibliHDwpjoSjk",
        "name": "Saptarangi FM",
        "streamUrl": "http://live.itech.host:9629/stream",
        "frequency": 101.6,
        "address": "Damak, Jhapa",
        "province": 1
    },
    {
        "id": "Rc2vjF1R7zdxV9zm5Mu8V",
        "name": "QN Radio",
        "streamUrl": "http://216.55.141.189:8060/;",
        "frequency": null,
        "address": "Doha, Qatar"
    },
    {
        "id": "77lQtQiKSCYLeI4aIf9aF",
        "name": "Radio Himshikhar",
        "streamUrl": "http://streaming.hamropatro.com:5507",
        "frequency": 103.3,
        "address": "Damak",
        "province": 1
    },
    {
        "id": "jxI6jGz2Nc0CFGXwyG7sS",
        "name": "Radio Amurta",
        "streamUrl": "http://95.217.153.73:8004/;",
        "frequency": 91.6,
        "address": "Triyuga Municipality - 11, Gaighat, Udayapur",
        "province": 1
    },
    {
        "id": "_BUqsfiSUUZ8alnMNLWAu",
        "name": "Radio Didibahini",
        "streamUrl": "http://live.itech.host:8326/stream",
        "frequency": 95.2,
        "address": "Kusma, Parbat",
        "province": 4
    },
    {
        "id": "X6YekIVXUR_c0qtOpHQTI",
        "name": "Radio Nepalbani",
        "streamUrl": "http://live.itechnepal.com:8676/stream",
        "frequency": 94.9,
        "address": "Mala Path - 2, Ilam",
        "province": 1
    },
    {
        "id": "XVuElUMXaqHI5meet4nvc",
        "name": "24 Online Radio",
        "streamUrl": "http://streaming.hamropatro.com:8553",
        "frequency": null,
        "address": "Onair Nepal Pvt. Ltd., Kalikasthan, Kathmandu",
        "province": 3
    },
    {
        "id": "4oIQ5G54eNW5nYt9SLHTg",
        "name": "Radio Buddha Awaaz",
        "streamUrl": "http://streaming.hamropatro.com:8349/;",
        "frequency": 89.6,
        "address": "Baanganga-8, Kapilvastu",
        "province": 5
    },
    {
        "id": "O3Cueq4FyHh2VgCYj4m0F",
        "name": "Dinesh FM 93.8 Mhz",
        "streamUrl": "https://live.itech.host:3985/stream",
        "frequency": 93.8,
        "address": "Dhangadhi, Kailali",
        "province": 7
    },
    {
        "id": "XvDPsa1K1HHAsuecm2TqU",
        "name": "Radio Sankhuwasava",
        "streamUrl": "http://live.itech.host:7016/stream",
        "frequency": 95.5,
        "address": "Khandbari 1, Sankhuwasabha",
        "province": 1
    },
    {
        "id": "9uXi8isF1DT_3Hdjq9-Hq",
        "name": "Radio Dhangadhi",
        "streamUrl": "http://216.55.141.189:8713/;",
        "frequency": 90.5,
        "address": "Dhangadhi, Kailali, Nepal",
        "province": 7
    },
    {
        "id": "E44hS4cQ3MMajpSrh-TJF",
        "name": "Khozee Radio",
        "streamUrl": "http://streaming.hamropatro.com:8060/;",
        "frequency": null,
        "address": "New Baneshwor, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "K_VyHWE3NoLx0HXDELLlI",
        "name": "Pathivara FM",
        "streamUrl": "http://live.itech.host:8744/stream",
        "frequency": 93.6,
        "address": "Damak, Nepal",
        "province": 1
    },
    {
        "id": "e27ZQMKf6nMAyRAlHR7-A",
        "name": "Radio Times",
        "streamUrl": "http://216.55.141.189:8387/;",
        "frequency": 94.8,
        "address": "Sainamaina-2, Rupandehi",
        "province": 5
    },
    {
        "id": "HojLeYuGlBgAqQ9IbckmU",
        "name": "Hajurko Radio",
        "streamUrl": "http://streaming.hamropatro.com:8258/;",
        "frequency": 102.1,
        "address": "Ramechhap",
        "province": 3
    },
    {
        "id": "VjDMkBhrwxs0o99yCPgFC",
        "name": "Jagaran FM",
        "streamUrl": "https://streaming.webhostnepal.com/8046/stream",
        "frequency": 90.8,
        "address": "Birendranagar, Surkhet, Nepal",
        "province": 6
    },
    {
        "id": "1BdjpH6pUNhRLNTnMnQCw",
        "name": "Khandbari fm",
        "streamUrl": "http://live.itechnepal.com:8286/stream",
        "frequency": 105.8,
        "address": "Khandbari 1, Budda Tole",
        "province": 1
    },
    {
        "id": "qKBoFi8TCiH_y1foqqOMy",
        "name": "Radio Safalta",
        "streamUrl": "https://live.itech.host:9149/stream",
        "frequency": 103.4,
        "address": "Masbar-7, Pokhara",
        "province": 4
    },
    {
        "id": "f_fwiFP07PmuZ0vXRzfZR",
        "name": "Solu FM",
        "streamUrl": "https://live.itech.host:9550/stream",
        "frequency": 101.2,
        "address": "Salleri-7, Dorpu Bazaa",
        "province": 1
    },
    {
        "id": "Gl0Z9b1y01wf-K_Oj7Wtv",
        "name": "Pradesh FM",
        "streamUrl": "http://streaming.hamropatro.com:8491",
        "frequency": 105.0,
        "address": "Birendranagar-6, Surkhet",
        "province": 6
    },
    {
        "id": "7f2AGuq_q9NKQa2VQU0lA",
        "name": "Radio Vision (Jhapa)",
        "streamUrl": "https://live.itech.host:3765/stream",
        "frequency": 91.6,
        "address": "Bhadrapur Road, Birtamod, Jhapa",
        "province": 1
    },
    {
        "id": "vZMSv-7_yo881Z5t8w4tP",
        "name": "Radio Lumbini",
        "streamUrl": "https://live.itech.host:4515/stream",
        "frequency": 96.8,
        "address": "Manigram Ruphandehi",
        "province": 5
    },
    {
        "id": "d4pC5WA9oEq0AhCae5Mrc",
        "name": "Krishnasar FM",
        "streamUrl": "https://live.itech.host:8429/stream",
        "frequency": 94.0,
        "address": "कृष्णसारमार्ग १२, नेपालगञ्ज उपमहानगरपालिका, बाँके",
        "province": 5
    },
    {
        "id": "oLNikWcidmqO2eriT9hr9",
        "name": "Nuwakot FM",
        "streamUrl": "http://216.55.141.189:8669/;",
        "frequency": 106.8,
        "address": "Bidhur-2, Nuwakot",
        "province": 3
    },
    {
        "id": "g-orbf1Fd3-iEIDiQ1VBN",
        "name": "Himal FM ",
        "streamUrl": "http://streaming.hamropatro.com:8054/;",
        "frequency": 90.2,
        "address": "Salleri-5, Solukhumbu",
        "province": 1
    },
    {
        "id": "Sgpcksq3hArPEcndYlPH7",
        "name": "Radio Namobuddha",
        "streamUrl": "https://streaming.hamropatro.com:8329/;",
        "frequency": 106.7,
        "address": "Dhulikhel",
        "province": 3
    },
    {
        "id": "-djJs2ZRHsNb43WHvixDS",
        "name": "Ilam FM",
        "streamUrl": "http://live.itechnepal.com:9635/stream",
        "frequency": 93.0,
        "address": "Tarakuti, Ilam - 2, Ilam",
        "province": 1
    },
    {
        "id": "6XO_8eo0N-0E_v7tJhyLn",
        "name": "Radio Deshantar",
        "streamUrl": "http://streaming.hamropatro.com:8136/;",
        "frequency": 100.3,
        "address": "Anamnagar, Kathmandu",
        "province": 3
    },
    {
        "id": "Owyt9eYS1zmT0Rq41donH",
        "name": "Kool FM ",
        "streamUrl": "https://streaming.softnep.net:10944/;",
        "frequency": 90.3,
        "address": "Bhotahity-30, Kathmandu",
        "province": 3
    },
    {
        "id": "nQVKiopZioZ28P0Bsg97t",
        "name": "Radio Amargadhi",
        "streamUrl": "http://live.itechnepal.com:8922/live",
        "frequency": 97.4,
        "address": "Amargadhi-5, Dadeldhura",
        "province": 7
    },
    {
        "id": "bHooWnUz9-ZEX_Iam8bp4",
        "name": "Sky FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8002/stream",
        "frequency": 106.6,
        "address": "Biratnagar, Morang",
        "province": 1
    },
    {
        "id": "E8uDWJj8FA0mpLlv2Qfo3",
        "name": "Star FM",
        "streamUrl": "http://live.itechnepal.com:9539/stream?type=.mp3",
        "frequency": 95.2,
        "address": "Mid Baneshwor, KTM, Nepal",
        "province": 3
    },
    {
        "id": "U7HJmCDUjoM95Hm1YrVnK",
        "name": "Tinjure Online",
        "streamUrl": "http://streaming.hamropatro.com:8455/;",
        "frequency": null,
        "address": "Myanglung-1, Terhathum",
        "province": 1
    },
    {
        "id": "vFsMscYrvs-sKzj6loMSY",
        "name": "Radio Melamchi",
        "streamUrl": "http://streaming.softnep.net:8051/;",
        "frequency": 107.2,
        "address": "Duwachaur VDC, Sindhupalchok, Nepal",
        "province": 3
    },
    {
        "id": "hluPnAelDm3teJRzJDMOB",
        "name": "Radio Bandipur FM",
        "streamUrl": "http://streaming.hamropatro.com:8473/;",
        "frequency": 88.8,
        "address": "Bandipur-1, Dumre Bazar",
        "province": 4
    },
    {
        "id": "1223-onnPQrdazETIfeCJ",
        "name": "Tikapur FM",
        "streamUrl": "https://live.itech.host:9519/live",
        "frequency": 101.0,
        "address": "Tikapur 9/B Multiple Campus Road",
        "province": 7
    },
    {
        "id": "DBeiUztuOfcWyY2MnlVD2",
        "name": "ACORAB",
        "streamUrl": "http://streaming.softnep.net:8009/;",
        "frequency": null,
        "address": "Lalitpur, Nepal",
        "province": 3
    },
    {
        "id": "25FL4A2WXLxfCaynWkmJY",
        "name": "Grace FM",
        "streamUrl": "https://live.itech.host:9418/stream",
        "frequency": 107.6,
        "address": "Suryabinayak, Bhaktapur",
        "province": 3
    },
    {
        "id": "x0zqqRLXVuumcfBMV3e6G",
        "name": "Radio Highway",
        "streamUrl": "http://streaming.hamropatro.com:8014/;",
        "frequency": 103.5,
        "address": "info@radiohighway.com.np"
    },
    {
        "id": "vf3kj6rXmKsrbRp584sv1",
        "name": "Radio Tiger",
        "streamUrl": "http://streaming.hamropatro.com:8637/;",
        "frequency": 99.2,
        "address": "Thakurbaba Municipality-1, Bhurigaun, Bardiya",
        "province": 5
    },
    {
        "id": "7cVQb53NoJSCsRVWglsp7",
        "name": "Mero Sathi FM",
        "streamUrl": "http://streaming.hamropatro.com:8571/;",
        "frequency": 107.2,
        "address": "Aanbookhaireni, Tanahun",
        "province": 4
    },
    {
        "id": "OsDo0rlOCKTd-WW74TJkv",
        "name": "Chitwan Radio Network",
        "streamUrl": "http://streaming.hamropatro.com:8603/;",
        "frequency": null,
        "address": "Bharatpur - 22, Patihani",
        "province": 3
    },
    {
        "id": "IhYwXQU9v7Ixv6Q9uk38X",
        "name": "Radio Parasi",
        "streamUrl": "http://streaming.softnep.net:8129/;",
        "frequency": 90.2,
        "address": "Ramgram-3, Parasi, Nawalparasi",
        "province": 5
    },
    {
        "id": "u6oxtSMRf9azLQ0Qpdwz2",
        "name": "Radio Sarada",
        "streamUrl": "http://live.itech.host:9443/stream?mp3",
        "frequency": 99.2,
        "address": "Khalanga, Salyan",
        "province": 6
    },
    {
        "id": "-x93ef8AKzKGYpPdFFdD4",
        "name": "Radio Langtang",
        "streamUrl": "http://streaming.hamropatro.com:8032/;",
        "frequency": 90.3,
        "address": "Laharepauwa-8, Syaubari, Rasuwa",
        "province": 3
    },
    {
        "id": "vZdbgmBPqOrWUFYetMLwn",
        "name": "Bhaktapur FM",
        "streamUrl": "http://streaming.softnep.net:8309/;",
        "frequency": 105.4,
        "address": "Itachhen-15, Bhaktapur",
        "province": 3
    },
    {
        "id": "ZrFBTfDd9XWrrZ3_RnqbC",
        "name": "Afno FM",
        "streamUrl": "https://streaming.softnep.net:10969/;",
        "frequency": 104.8,
        "address": "Amargadhi 5, Amargadhi Killa, Dadeldhura",
        "province": 7
    },
    {
        "id": "6Xqk8OTTlD3Oc_65ZjGHi",
        "name": "Radio Bihani",
        "streamUrl": "https://live.itech.host:9113/stream",
        "frequency": 97.6,
        "address": "Neelkantha, Puchhar Bazzar, Dhadingbesi, Dhading",
        "province": 3
    },
    {
        "id": "5wGOrAfGOTswWMIPHTumc",
        "name": "Gunjan FM",
        "streamUrl": "https://live.itech.host:9442/stream",
        "frequency": 105.3,
        "address": "Chandrapur, Rautahat",
        "province": 2
    },
    {
        "id": "oP1KUnwKnpAAg82CyedLN",
        "name": "Shuklagandaki FM",
        "streamUrl": "https://live.itech.host:7137/stream",
        "frequency": 97.6,
        "address": "Shuklagandaki-4, Tanahun",
        "province": 4
    },
    {
        "id": "qmkn8Isf6nHsAI7N8Nej9",
        "name": "Radio Madanpokhara FM",
        "streamUrl": "http://streaming.hamropatro.com:8236/;",
        "frequency": 106.9,
        "address": "तानसेन नगरपालिका ८ मदनपाेखरा पाल्पा",
        "province": 5
    },
    {
        "id": "HlBZ2nrii6AJbC5IqaS--",
        "name": "Damauli FM",
        "streamUrl": "http://streaming.hamropatro.com:8529/;",
        "frequency": 94.2,
        "address": "Balmandir Line, Byas - 2, Damauli, Tanahun, Gandaki Pradesh",
        "province": 4
    },
    {
        "id": "_XXXD7nmxFGbmTQMN77Jb",
        "name": "Metro Traffic FM",
        "streamUrl": "https://centova1.toofancom.com/proxy/trafficradio?mp=/stream",
        "frequency": 95.5,
        "address": "Metropolitan Traffic Police, Ramshahpath, Kathmandu",
        "province": 3
    },
    {
        "id": "P8XRs5DoaNUlbyvQX2pwj",
        "name": "Ichchhakamana FM",
        "streamUrl": "http://streaming.softnep.net:8139/;",
        "frequency": 102.4,
        "address": "Ichchhakamana-4, Chitwan",
        "province": 3
    },
    {
        "id": "TGpm4LfEJBTfcTvViBlcU",
        "name": "Radio Mandavi FM",
        "streamUrl": "http://streaming.hamropatro.com:8477/;",
        "frequency": 97.0,
        "address": "Mallarani Rural Municipality-4, Khalanga, Pyuthan",
        "province": 5
    },
    {
        "id": "cNv4yXHBqhNExdCmYgFw8",
        "name": "Radio Mukti",
        "streamUrl": "http://216.55.141.189:8593/;",
        "frequency": 95.5,
        "address": "Butwal-4, Rupandehi",
        "province": 5
    },
    {
        "id": "rjUkgL_fX75NQzqNPIuIH",
        "name": "Radio Arpan ",
        "streamUrl": "http://streaming.hamropatro.com:8138/;",
        "frequency": 104.5,
        "address": "Ratnanagar-1, Bakulahar, Chitwan",
        "province": 3
    },
    {
        "id": "RVcSKrrgq7RQKjpQp28Us",
        "name": "Radio Rajmarga",
        "streamUrl": "http://streaming.softnep.net:8299/;",
        "frequency": 92.1,
        "address": "Naubishe, Dharke, Dhading",
        "province": 3
    },
    {
        "id": "kxQenrUOiZeZwkHUJg3sR",
        "name": "Radio Bindas",
        "streamUrl": "http://streaming.hamropatro.com:8615/;",
        "frequency": 94.8,
        "address": "Birgunj-10, Panitanki Bayarek Road, Nepal",
        "province": 2
    },
    {
        "id": "xQsj01jyG2iYKrXyN1V_6",
        "name": "Darchula FM",
        "streamUrl": "https://streaming.softnep.net:10951/;",
        "frequency": 90.0,
        "address": "Khalanga-5, Darchula",
        "province": 7
    },
    {
        "id": "2vprwzDXqjfdbQWmVYG-N",
        "name": "Radio Palpa",
        "streamUrl": "http://streaming.hamropatro.com:8467/;",
        "frequency": 97.1,
        "address": "Rampur-5, Palpa",
        "province": 5
    },
    {
        "id": "DIWkzcedbnZc7CJITtNZC",
        "name": "Radio Baadal",
        "streamUrl": "http://streaming.hamropatro.com:8188/;",
        "frequency": 89.0,
        "address": "Simraungadh, Bara, Nepal",
        "province": 2
    },
    {
        "id": "92uTVA0Klq9S_NVAEFKN9",
        "name": "Radio Koseli FM",
        "streamUrl": "http://streaming.softnep.net:8149/;",
        "frequency": 97.0,
        "address": "Bartagoriya-2, Sadakpur, Kailali",
        "province": 7
    },
    {
        "id": "wAFDh7pAVqGD3lOiMqMYk",
        "name": "RADIO SAAJHA CHAUTARI",
        "streamUrl": "https://samachardata.radioca.st/;",
        "frequency": null,
        "address": "Japan",
        "disabled": true
    },
    {
        "id": "2Pe61Oqo6tRU1nRaoqFZS",
        "name": "Radio Sanket",
        "streamUrl": "http://216.55.141.189:8523/;",
        "frequency": 93.0,
        "address": "Gaindakot-5, Nawalparasi",
        "province": 5
    },
    {
        "id": "Qz4lX2FOsz6UEbioyQc8i",
        "name": "Radio Sadvab",
        "streamUrl": "http://streaming.hamropatro.com:8577/;",
        "frequency": 91.2,
        "address": "Dhamboji-1, Nepalgunj, Nepal",
        "province": 5
    },
    {
        "id": "-o3sPf5X8BekRKPX7TGCA",
        "name": "Radio Unnati",
        "streamUrl": "https://live.itech.host:8009/stream",
        "frequency": 92.9,
        "address": "Purano Mulmaarga, Bhojpur-7",
        "province": 1
    },
    {
        "id": "Q-AUevma7bCHPXIH8hqzg",
        "name": "Radio Harpal",
        "streamUrl": "https://online.net.np/8040/stream",
        "frequency": 90.9,
        "address": "Tokha, Kathmandu",
        "province": 3
    },
    {
        "id": "m69vOKT0_zxNERjIK8sEy",
        "name": "Radio Bihani",
        "streamUrl": "http://streaming.softnep.net:8061/;",
        "frequency": 89.0,
        "address": "Bareng, Baglung",
        "province": 4
    },
    {
        "id": "WY2auAGQzxcnbRhrN4OPf",
        "name": "Radio Chhimkeshwori",
        "streamUrl": "http://streaming.hamropatro.com:8487/;",
        "frequency": 106.2,
        "address": "Bandipur-1, Tanahun",
        "province": 4
    },
    {
        "id": "U8jSIK_zpC7zdxO0ygXyn",
        "name": "Radio Jhapa",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8034/stream",
        "frequency": 100.7,
        "address": "Damak Municipality-6, Jhapa",
        "province": 1
    },
    {
        "id": "qBnaZTwvoc34P3QkANVYg",
        "name": "Radio Holeri FM",
        "streamUrl": "http://streaming.hamropatro.com:8659/;",
        "frequency": 102.5,
        "address": "Runtigadhi-6, Rolpa",
        "province": 5
    },
    {
        "id": "_1nHns4vLpPQWnPiMzOvV",
        "name": "Radio Madi Aawaj",
        "streamUrl": "http://streaming.hamropatro.com:8629/;",
        "frequency": 98.6,
        "address": "Madi-2, Rolpa",
        "province": 5
    },
    {
        "id": "qn8igX0KawEkXTYjR1EI5",
        "name": "Radio Makawanpur gadi",
        "streamUrl": "http://streaming.hamropatro.com:8767/;",
        "frequency": 95.0,
        "address": "Makwanpurgadhi, Makranchuli",
        "province": 3
    },
    {
        "id": "CTpZ6AisxFZzj5euxpL6M",
        "name": "Radio Madhesh",
        "streamUrl": "http://streaming.hamropatro.com:8417/;",
        "frequency": 89.3,
        "address": "Malangwa-10, Sarlahi",
        "province": 2
    },
    {
        "id": "gvgYq5akm7tq0DIaBbgVd",
        "name": "Dautari FM",
        "streamUrl": "http://live.itechnepal.com:7042/stream?type=.mp3",
        "frequency": 105.8,
        "address": "Bardaghat, Nawalparasi",
        "province": 5
    },
    {
        "id": "oUwsGRuj-9IzbLGxybgJM",
        "name": "Newa FM",
        "streamUrl": "http://streaming.hamropatro.com:8835/;",
        "frequency": 106.6,
        "address": "Kirtipur-2, Kathmandu",
        "province": 3
    },
    {
        "id": "bMvuiIRwaz1ydEZrc3d4v",
        "name": "Sandhikharka FM",
        "streamUrl": "http://streaming.hamropatro.com:8373/;",
        "frequency": 89.8,
        "address": "Sandhikharka-2, Arghakhanchi",
        "province": 5
    },
    {
        "id": "-drQCMVbDoSay8WrKY-jN",
        "name": "Radio Aafno FM (Rukum)",
        "streamUrl": "http://streaming.softnep.net:8063/;",
        "frequency": 90.4,
        "address": "Rukum, Nepal",
        "province": 6
    },
    {
        "id": "FDCvSAZdzKPJyeYxz-2H-",
        "name": "Radio Bardibas",
        "streamUrl": "http://streaming.hamropatro.com:8240/;",
        "frequency": 94.0,
        "address": "Bardibas, Mahottari",
        "province": 2
    },
    {
        "id": "jx8R77tIuwZ2zU1X23ZWx",
        "name": "Radio Sathi",
        "streamUrl": "https://streaming.softnep.net:10863/;",
        "frequency": 98.6,
        "address": "Mechinagar-6, Jhapa",
        "province": 1
    },
    {
        "id": "WskRQy6Oa363G-WmGyQUG",
        "name": "Radio Top Town",
        "streamUrl": "http://live.itech.host:4630/stream",
        "frequency": 107.0,
        "address": "Suryabinayak, Bhaktapur, Nepal",
        "province": 3
    },
    {
        "id": "9YRG_Qvpz6hMG68P2Y613",
        "name": "Radio Samagra Madhesh",
        "streamUrl": "http://streaming.softnep.net:8151/;",
        "frequency": 90.4,
        "address": "Panitanki, Birgunj -8 Parsa",
        "province": 2
    },
    {
        "id": "r-ZlAg2A4eRDkeYlHUWuG",
        "name": "Radio Simana",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 106.9,
        "address": "Kakarvitta, Mechinagar 6, Jhapa, Nepal",
        "province": 1
    },
    {
        "id": "-ROC7t_v30lBVNfd4GHvt",
        "name": "Radio Janamukhi",
        "streamUrl": "http://streaming.hamropatro.com:8301/;",
        "frequency": 97.0,
        "address": "Chainpur, Bajhang",
        "province": 7
    },
    {
        "id": "yck3mCu_RGGZu2uZSL9nI",
        "name": "Radio Seven Star",
        "streamUrl": "http://streaming.softnep.net:8177/;",
        "frequency": 99.2,
        "address": "Patan Municipality-8, Khodpe, Baitadi",
        "province": 7
    },
    {
        "id": "YDG1c7F7Lpx9I0NvNsqYN",
        "name": "Radio Barahi",
        "streamUrl": "http://streaming.softnep.net:8083/;",
        "frequency": 99.2,
        "address": "Rastrabank Chowk, Pokhara",
        "province": 4
    },
    {
        "id": "cXeNgbuF0NzKsCmeij6TZ",
        "name": "Radio Bharatpur",
        "streamUrl": "http://streaming.hamropatro.com:8325/;",
        "frequency": 105.2,
        "address": "Bharatpur-7, Chitwan",
        "province": 3
    },
    {
        "id": "t9KYKo3pQmWwQtIFjtCgg",
        "name": "Radio Akala ",
        "streamUrl": "http://streaming.hamropatro.com:8821/;",
        "frequency": 105.3,
        "address": "Pokhara Metropolitican City, Lamachour-16, Pokhara",
        "province": 4
    },
    {
        "id": "NjCEoYdMvTUH6Qs06lWnh",
        "name": "Narayani FM 103.8 MHz",
        "streamUrl": "http://streaming.hamropatro.com:8272/;",
        "frequency": null,
        "address": "PO Box: 23,Link Road Birgunj, Parsa, Nepal",
        "province": 2
    },
    {
        "id": "QH7cK3WzQ2YdQoDMPZ1D0",
        "name": "Radio Sungabha  104.6",
        "streamUrl": "http://streaming.hamropatro.com:8795/;",
        "frequency": 107.0,
        "address": "Bardibas-3, Mahottari",
        "province": 2
    },
    {
        "id": "D_gFit9hdRkxl7ukCexTN",
        "name": "Radio Gurbaba FM",
        "streamUrl": "https://live.itech.host:8663/stream",
        "frequency": 89.7,
        "address": "Bansgadhi-05 Bansgadhi, Bardiya",
        "province": 5
    },
    {
        "id": "RVE51DaqyWM0vIw-97j7g",
        "name": "Tilottama FM",
        "streamUrl": "https://live.itech.host:4585/stream",
        "frequency": 96.4,
        "address": "Tilottama-5, Manigram, Rupandehi",
        "province": 5
    },
    {
        "id": "g7Q8ZCDs0IWP9QVOiffji",
        "name": "Radio Mero Fm",
        "streamUrl": "http://streaming.hamropatro.com:8078/;",
        "frequency": 93.3,
        "address": null
    },
    {
        "id": "gmkAZx2UOZRC7_EkTevPa",
        "name": "Vision FM (Okhaldhunga)",
        "streamUrl": "http://streaming.hamropatro.com:8645/;",
        "frequency": 90.5,
        "address": "Okhaldhunga",
        "province": 1
    },
    {
        "id": "kW7s8mTEfroK5PcEgsz2K",
        "name": "Radio Lumbini",
        "streamUrl": "https://live.itech.host:4515/stream",
        "frequency": 96.8,
        "address": "Tilottama-5, Manigram, Rupandehi, Lumbini",
        "province": 5
    },
    {
        "id": "pULAzyHa8Nc46Ey7Jz22U",
        "name": "Radio Sarlahi",
        "streamUrl": "http://216.55.141.189:8633/;",
        "frequency": 105.7,
        "address": "Harion-11, Sarlahi",
        "province": 2
    },
    {
        "id": "uBFSwbWOjokf6nennm74v",
        "name": "Radio pallawee ",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8020/radio.mp3",
        "frequency": 95.2,
        "address": "Triveni Rolpa Nepal",
        "province": 5
    },
    {
        "id": "KEQGKzn46kiVyuYSP3eLm",
        "name": "Prime Fm",
        "streamUrl": "http://streaming.softnep.net:8175/;",
        "frequency": 104.5,
        "address": null
    },
    {
        "id": "aAtFRbc3JbU-AN4_PpWiA",
        "name": "Radio Paryabaran",
        "streamUrl": "http://streaming.hamropatro.com:8733/;",
        "frequency": 104.2,
        "address": null
    },
    {
        "id": "XZxVWa__0wEso9UKanise",
        "name": "Rautahat FM",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 90.8,
        "address": "Gaur",
        "province": 2
    },
    {
        "id": "bCnQdG5iUqm4GTiZqGiA0",
        "name": "Radio Chitwan ",
        "streamUrl": "https://live.itech.host:2275/stream",
        "frequency": 94.6,
        "address": "Ratnanagar-2, Tandi, Chitwan",
        "province": 3
    },
    {
        "id": "oFK4rG6jTEINJR8-tH7m8",
        "name": "Radio Ramechhap",
        "streamUrl": "http://streaming.hamropatro.com:8098/;",
        "frequency": 95.8,
        "address": "Davkota Chok Manthali",
        "province": 3
    },
    {
        "id": "rT3iMB2y44kIYVsCEJ7R5",
        "name": "Bhanu FM",
        "streamUrl": "http://streaming.softnep.net:8211/;",
        "frequency": 106.9,
        "address": "Myagde, Tanahun",
        "province": 4
    },
    {
        "id": "O1C8Ga_bugp9u3S315SDp",
        "name": "Radio Roshi ",
        "streamUrl": "http://centova1.toofancom.com:4193/;",
        "frequency": 101.6,
        "address": "Roshi, Kavreplanchok",
        "province": 3
    },
    {
        "id": "5BRpCDVPyzjOTcPVIstfF",
        "name": "Radio Netrajyot",
        "streamUrl": "http://streaming.softnep.net:8227/;",
        "frequency": 106.6,
        "address": "Barabise, Sindhupalchok",
        "province": 3
    },
    {
        "id": "G-7dc4S9rEjcWMmlpjGrN",
        "name": "Radio Janapriya ",
        "streamUrl": "http://live.itech.host:8792/stream",
        "frequency": 102.4,
        "address": "Saphebagar, Achham",
        "province": 7
    },
    {
        "id": "hFP_PP5NrUJDqHRgKgWGH",
        "name": "Radio Malangwa",
        "streamUrl": "http://streaming.hamropatro.com:8711/;",
        "frequency": 95.6,
        "address": " Malangwa 8, Sarlahi",
        "province": 2
    },
    {
        "id": "TZEM3SgpK41vHbu8Ydizu",
        "name": "Neelkantha FM ",
        "streamUrl": "http://streaming.softnep.net:8251/;",
        "frequency": 98.5,
        "address": "Neelkantha Municipality-3, Dhading",
        "province": 3
    },
    {
        "id": "Qhv-M1pquVjyOD9rb-on1",
        "name": "Dhaulagiri Fm",
        "streamUrl": "http://streaming.hamropatro.com:8535/;",
        "frequency": 98.6,
        "address": null
    },
    {
        "id": "pGxlwsxIsD1c6_ief96Cj",
        "name": "Radio Madhyapaschim",
        "streamUrl": "http://live.itech.host:9006/stream",
        "frequency": 91.4,
        "address": "Ghorahi - Dang",
        "province": 5
    },
    {
        "id": "qPJgT7xvgWTDMvOL4Y8kC",
        "name": "RADIO BUDHINANDA FM",
        "streamUrl": "https://stream-41.zeno.fm/r6teyggpq7zuv?zs=TIoXQy1gREyY9Y54-eqJMw",
        "frequency": 96.5,
        "address": "Kolti, Bajura",
        "province": 7,
        "disabled": true
    },
    {
        "id": "aMMg4qcnf7gB01m7wFQO1",
        "name": "Radio Muktinath",
        "streamUrl": "http://live.itechnepal.com:9180/live",
        "frequency": 90.8,
        "address": "Palpa,Nepal",
        "province": 5
    },
    {
        "id": "kqHAW3HIlP48sLmpwhjP8",
        "name": "Radio Shivashakti",
        "streamUrl": "http://live.itech.host:7028/live",
        "frequency": 98.3,
        "address": "Bharatpur-24, Shivanagar, Chitwan, Nepal",
        "province": 3
    },
    {
        "id": "xT70TNYpdZZNMr_o31O8L",
        "name": "Dullu FM",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 101.5,
        "address": "Dullu, Dailekh",
        "province": 6
    },
    {
        "id": "8C2jAk8hrjZKeGVlP7-gY",
        "name": "Sumhatlung FM",
        "streamUrl": "http://streaming.softnep.net:8095/;",
        "frequency": 104.2,
        "address": "Phidim-1, Panchthar, Nepal",
        "province": 1
    },
    {
        "id": "iByB0y9LMIDKEw53C1lC7",
        "name": "Online Radio Tribeni (Rolpa)",
        "streamUrl": "http://streaming.hamropatro.com:8827/;",
        "frequency": null,
        "address": "Tribeni Gaupalika 5, Jugar, Rolpa",
        "province": 5
    },
    {
        "id": "X5qiXpykrt1Rx1A37wLpE",
        "name": "Radio Namaste",
        "streamUrl": "http://live.itech.host:8338/stream?mp3",
        "frequency": 96.5,
        "address": "Tikapur-1, Kailali",
        "province": 7
    },
    {
        "id": "o_A6Z9kYuzKX5899TiXFH",
        "name": "Eagle FM",
        "streamUrl": "http://live.itechnepal.com:9048/stream?type=.mp3",
        "frequency": 99.4,
        "address": "Phidim 1, Panchthar",
        "province": 1
    },
    {
        "id": "rP7EWEHpkgpNdMqz39L3x",
        "name": "Relation FM",
        "streamUrl": "http://streaming.softnep.net:8119",
        "frequency": 88.0,
        "address": "Ratnanagar-1, Chitwan",
        "province": 3
    },
    {
        "id": "i7zjzzf21lHA_FNxyWPyY",
        "name": "Radio Swargadwari FM",
        "streamUrl": "http://streaming.hamropatro.com:8743",
        "frequency": 88.4,
        "address": "Pyuthan, Nepal",
        "province": 5
    },
    {
        "id": "anGTRxaGQElcgyLZnWKzr",
        "name": "Radio Sailung",
        "streamUrl": "http://live.itechnepal.com:9174/stream?type=.mp3",
        "frequency": 92.7,
        "address": "Charikot,Dolakha",
        "province": 3
    },
    {
        "id": "DiLDLN3Nc-o6_4Dpjxz4G",
        "name": "Radio Thaha Sanchar FM (Hetauda)",
        "streamUrl": "http://streaming.softnep.net:8001/",
        "frequency": 99.6,
        "address": "Hetauda -4 AjarAmar  Road",
        "province": 3
    },
    {
        "id": "4hSrOeHLTIR7hOQI140YE",
        "name": "Radio Planet",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 89.1,
        "address": "Chuatara, Shindhupalchwok",
        "province": 3
    },
    {
        "id": "Wj-cPStXVNN_khh-GXE87",
        "name": "Capital FM",
        "streamUrl": "http://streaming.softnep.net:8037/",
        "frequency": 92.4,
        "address": "Saraswati Mart, Thapagaun, New Baneshwor",
        "province": 3
    },
    {
        "id": "VgdTcpvVW-rDT7LyHQ7Qf",
        "name": "Radio Madi",
        "streamUrl": "http://streaming.hamropatro.com:8457",
        "frequency": 107.6,
        "address": "Basantapur Bajar, Madi Chitwan",
        "province": 3
    },
    {
        "id": "f-aUIgLRfHnm63rz89amL",
        "name": "Saipal FM",
        "streamUrl": "http://streaming.softnep.net:8165",
        "frequency": 100.6,
        "address": "Chainpur, Bajhang, Nepal",
        "province": 7
    },
    {
        "id": "gZoIDcEVt-BNYHMR0b3jx",
        "name": "BFBS Gurkha Radio",
        "streamUrl": "http://edge-audio-03-gos2.sharp-stream.com/ssvcbfbs3.mp3",
        "frequency": null,
        "address": ""
    },
    {
        "id": "OV09GxS0pmFF0QaT3OSq5",
        "name": "Kanchanjungha FM",
        "streamUrl": "http://streaming.hamropatro.com:8823",
        "frequency": 92.6,
        "address": "Anarmani, Birtamod",
        "province": 1
    },
    {
        "id": "vu1pN-RMFIL8CCOv3xxlL",
        "name": "Radio Paschim Today",
        "streamUrl": "https://live.itech.host:3240/stream",
        "frequency": 88.8,
        "address": "Kailali, Dhangadhi-1, Behind Chaulani Departmental Store, Nepal, Dhangadhi, Nepal",
        "province": 7
    },
    {
        "id": "fkXEYM7Kh0i0HNqzLzTW8",
        "name": "Hamro FM",
        "streamUrl": "http://216.55.141.189:8114",
        "frequency": 94.0,
        "address": "Bharatpur, Chitwan",
        "province": 3
    },
    {
        "id": "voHc4yRXo2Z-SepdlhhBG",
        "name": "Apostle FM",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 102.6,
        "address": "Kaski, Pokhara ",
        "province": 4
    },
    {
        "id": "iexiwpSUsgNY8K7g75DXN",
        "name": "Rupandehi FM",
        "streamUrl": "http://streaming.softnep.net:8201",
        "frequency": 102.0,
        "address": "Siddharthanagar - 8, Rupandehi",
        "province": 5
    },
    {
        "id": "2OcL9sHOdHnf7RphhqL1C",
        "name": "Choice FM",
        "streamUrl": "http://streaming.hamropatro.com:8256",
        "frequency": 90.4,
        "address": "Gorkha-Nepal",
        "province": 4
    },
    {
        "id": "MRyK_cgN99boJj8GgPsb3",
        "name": "Radio Marsyangdi",
        "streamUrl": "https://live.itech.host:9125/stream",
        "frequency": 95.0,
        "address": "Besishahar-2, Tamu Sangrahalaya bawan, Lamjung",
        "province": 4
    },
    {
        "id": "erBSYPbtBJ_7e8Vv83sF-",
        "name": "Radio Rudraksha",
        "streamUrl": "https://streaming.softnep.net:10874",
        "frequency": 98.8,
        "address": "Jeleshwar Municipality, Ward No. 2, Mahottari",
        "province": 2
    },
    {
        "id": "oNASSgr9ILQrIvk-KlOsw",
        "name": "Radio Madhyabindu",
        "streamUrl": "https://streaming.softnep.net:10981/;",
        "frequency": 101.0,
        "address": "Kawasoti-5, Nawalparasi",
        "province": 5
    },
    {
        "id": "cQF9C8O1HPC2MqCRpltpB",
        "name": "Radio Miteree",
        "streamUrl": "https://live.itech.host:2705/stream",
        "frequency": 98.2,
        "address": "Phidim-4, Gadhi, Panchthar",
        "province": 1
    },
    {
        "id": "6TBOopy_EsOkxURpO4e5V",
        "name": "Headlines & Music FM",
        "streamUrl": "https://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 97.2,
        "address": "Pulchowk, Lalitpur, Nepal",
        "province": 3
    },
    {
        "id": "zSHXgtbLGeBw5YOf_33cZ",
        "name": "Radio Kawasoti",
        "streamUrl": "http://streaming.hamropatro.com:8435",
        "frequency": 102.6,
        "address": "Kawasoti, Nawalparasi",
        "province": 5
    },
    {
        "id": "Ly611Ak7bVnTmcU-6vMD3",
        "name": "Pathivara Online Radio",
        "streamUrl": "http://streaming.hamropatro.com:8208/",
        "frequency": null,
        "address": " Prabas Pvt. Ltd., Phidim-1, Paanchthar",
        "province": 1
    },
    {
        "id": "Ait0Xe7dzJQPlnhBrV1q-",
        "name": "Radio Sanobheri FM",
        "streamUrl": "https://live.itech.host:9425/stream",
        "frequency": 100.8,
        "address": "Rukum, Musikot",
        "province": 5
    },
    {
        "id": "NQpL_j1LEoyFLm1Jv6QUK",
        "name": "Swarnim FM",
        "streamUrl": "http://216.55.141.189:8419",
        "frequency": 96.3,
        "address": "Malangwa, Sarlahi",
        "province": 2
    },
    {
        "id": "bbvIDSyrCqt2DvtoynLAb",
        "name": "Radio Lamjung",
        "streamUrl": "https://live.itech.host:8951/stream",
        "frequency": 91.8,
        "address": "Beshisahaar, Lamjung",
        "province": 4
    },
    {
        "id": "HqZ3YD91D7xCNyBXZdwKO",
        "name": "Radio Makawanpur",
        "streamUrl": "http://streaming.softnep.net:8057",
        "frequency": 101.3,
        "address": "Hetauda-2, Palpasa road, Makawanpur, Nepal",
        "province": 3
    },
    {
        "id": "jPsY-C4YaLMsVeUPRscYC",
        "name": "Hetauda FM",
        "streamUrl": "http://streaming.hamropatro.com:8471",
        "frequency": 96.6,
        "address": "Hetauda-4, Makwanpur",
        "province": 3
    },
    {
        "id": "kRlLkR8U7UQePQVJG1Tq1",
        "name": "Radio Jana  Sanchar",
        "streamUrl": "https://online.net.np/8116/stream",
        "frequency": 107.9,
        "address": "Kamalbinayak-4, Bhaktapur,",
        "province": 3
    },
    {
        "id": "Qmq2V5W26Lm9DZElzjz4D",
        "name": "Radio Udaypur",
        "streamUrl": "http://streaming.hamropatro.com:8021",
        "frequency": 102.4,
        "address": "Triyuga, Udayapur, Nepal",
        "province": 1
    },
    {
        "id": "SvMjy_sFJdRtlnszcq8v9",
        "name": "Radio Sindhu",
        "streamUrl": "http://streaming.softnep.net:8041/",
        "frequency": 105.0,
        "address": "Chautara-8, Sindhupalchok",
        "province": 3
    },
    {
        "id": "nyiPc3gcEgDF9LHISRlNg",
        "name": "Nawalpur FM",
        "streamUrl": "http://streaming.hamropatro.com:8292",
        "frequency": 104.7,
        "address": "Kawasoti, Nawalpur",
        "province": 4
    },
    {
        "id": "65n9GFh7vEISQc1ZYTEuV",
        "name": "Hamro Radio",
        "streamUrl": "https://live.itech.host:9556/stream",
        "frequency": 103.4,
        "address": "Charikot, Dolakha, Nepal",
        "province": 3
    },
    {
        "id": "XhYbdk5jp2ZjaJGn8sj_Y",
        "name": "Radio Samarpan",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 98.2,
        "address": "Simara, Bara, Nepal",
        "province": 2
    },
    {
        "id": "6bpfHOe6ylt3HJHOBQ5ek",
        "name": "Radio Upatyaka",
        "streamUrl": "https://online.net.np/8042/stream",
        "frequency": 87.6,
        "address": "Tripureshwor, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "qRF7mBPMWCz658zCcWb_P",
        "name": "Radio Nagarik",
        "streamUrl": "http://node-12.zeno.fm/5g8sn1w1em8uv?rj-ttl=5&rj-tok=AAABd_IDgdkAp4IYSd9uAPj8rg",
        "frequency": 90.8,
        "address": "Simara, Bara",
        "province": 2
    },
    {
        "id": "E7XMBBv9M_LGqZ4AQqOqo",
        "name": "FM Plus",
        "streamUrl": "http://streaming.hamropatro.com:8499",
        "frequency": 89.1,
        "address": "Gauradaha-2, Jhapa,",
        "province": 1
    },
    {
        "id": "AYPxG9M1kGgBLjPAKIg5X",
        "name": "Radio Jaljala",
        "streamUrl": "https://live.itech.host:8149/stream",
        "frequency": 96.4,
        "address": "Liwang-7, Rolpa",
        "province": 5
    },
    {
        "id": "TOuRcQ53-ZiIorjCkZfEv",
        "name": "Radio Himalaya",
        "streamUrl": "https://live.itech.host/himalayaradio",
        "frequency": null,
        "address": "Bagbazar, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "BDErWXYruI9X5SgG_zsts",
        "name": "Radio Satellite",
        "streamUrl": "http://streaming.hamropatro.com:8250/",
        "frequency": 105.5,
        "address": "Ramgram-6 ,Parasi, Nawalparasi",
        "province": 5
    },
    {
        "id": "NjUkdpNFyp0faMUVrzWAY",
        "name": "Radio Rapti",
        "streamUrl": "http://streaming.softnep.net:10902/;stream.nsv&type=mp3&volume=10",
        "frequency": 98.4,
        "address": "Rapti Gaupalika- 2, Lalmatiya",
        "province": 5
    },
    {
        "id": "OO1DY5YVhXqK9CGyOwQnA",
        "name": "Radio Bajura",
        "streamUrl": "http://streaming.softnep.net:8105",
        "frequency": 104.0,
        "address": "Martadi, Bajura",
        "province": 7
    },
    {
        "id": "AhOfN9XwY_4a6wANjIOQZ",
        "name": "Tinau FM",
        "streamUrl": "http://streaming.softnep.net:8293",
        "frequency": 98.2,
        "address": "Rupandehi, Nepal",
        "province": 5
    },
    {
        "id": "fscTuAfnSfU0mBm76YRk0",
        "name": "Radio Athrai",
        "streamUrl": "http://streaming.hamropatro.com:8094",
        "frequency": 101.2,
        "address": "Athrai-1, Sankranti Bazar, Terhathum",
        "province": 1
    },
    {
        "id": "LILbR2p37ZwCHxm0ZDw-L",
        "name": "Radio Sahino",
        "streamUrl": "http://live.itech.host:7093/stream",
        "frequency": null,
        "address": null
    },
    {
        "id": "EtZWDNQdF9wCn6d5IDs91",
        "name": "Radio Nation",
        "streamUrl": "http://live.itech.host:1440/stream",
        "frequency": 103.9,
        "address": null
    },
    {
        "id": "vPLaLuAHw0c94YADcUyhk",
        "name": "Radio Hapure",
        "streamUrl": "http://streaming.hamropatro.com:8068",
        "frequency": 89.4,
        "address": "Babai Rural Municipality - 04, Hapure Dang",
        "province": 5
    },
    {
        "id": "7Kjum3V5I6rnuBZM914ue",
        "name": "Radio Sanfebagar",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 101.0,
        "address": "Sanfebagar Achham, Nepal",
        "province": 7
    },
    {
        "id": "qRlDjNRUd96EH7-mCT3th",
        "name": "Sindhu FM",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 102.8,
        "address": null
    },
    {
        "id": "bcPHjrlT0xdpD4Fh2MK_1",
        "name": "Radio Chankheli",
        "streamUrl": "http://streaming.softnep.net:8071",
        "frequency": 98.8,
        "address": "Khandachakra Municipility, Manma-1, Kalikot, Karnali",
        "province": 6
    },
    {
        "id": "XUufh0RWEzzvLNp95VQjB",
        "name": "Radio Simara",
        "streamUrl": "https://streaming.softnep.net:10925/;",
        "frequency": 91.2,
        "address": "Simara, Bara",
        "province": 2
    },
    {
        "id": "BRsbzMdqEdpfKIzgYmlr7",
        "name": "Radio Sarathi",
        "streamUrl": "http://streaming.hamropatro.com:8469",
        "frequency": 107.4,
        "address": "Kharbang, Baglung",
        "province": 4
    },
    {
        "id": "xn7-UplacOWYe3DtTku4Z",
        "name": "Times FM",
        "streamUrl": "http://streaming.hamropatro.com:8663",
        "frequency": 90.6,
        "address": "Chabahil, Kathmandu",
        "province": 3
    },
    {
        "id": "LuyELZWQQyHov6c_nlAWq",
        "name": "Radio Rampur",
        "streamUrl": "http://live.itech.host:2030/stream",
        "frequency": 103.6,
        "address": "Palpa, Nepal",
        "province": 5
    },
    {
        "id": "z1eynRR78TuDylJcGeaKh",
        "name": "A One FM",
        "streamUrl": "http://streaming.hamropatro.com:8619",
        "frequency": 99.0,
        "address": "Khudunabari, Jhapa",
        "province": 1
    },
    {
        "id": "7mUbxXIvmVv6fipRSzgmn",
        "name": "Radio Rolpa",
        "streamUrl": "http://streaming.hamropatro.com:8150",
        "frequency": 93.8,
        "address": "Rolpa, Nepal",
        "province": 5
    },
    {
        "id": "HOOIt-3-SFg8C7iYEJZXa",
        "name": "Radio Namaste",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 92.8,
        "address": "Kalikanagar, Butwal-12, Rupandehi, Nepal",
        "province": 5
    },
    {
        "id": "U1zUp6wu3jAVOZDvWxElN",
        "name": "Kites FM",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 91.8,
        "address": "Tikapur, Kailali",
        "province": 7
    },
    {
        "id": "SNHz9PgWoJJaUqv8GJ2sJ",
        "name": "Nepali Sanchar Radio",
        "streamUrl": "http://onlineradio.websoftitnepal.com:8048/",
        "frequency": null,
        "address": "Melbourne, VIC, Australia"
    },
    {
        "id": "aQ0TDOm0KHUYazFiwVVMX",
        "name": "Radio Mangsebung",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": null,
        "address": "https://www.facebook.com/mewanambin"
    },
    {
        "id": "U3gYTt5yR9wUxqOs3OTbg",
        "name": "Radio Jiri",
        "streamUrl": "http://streaming.hamropatro.com:8727",
        "frequency": 94.0,
        "address": "Jiri-6, Dolakha",
        "province": 3
    },
    {
        "id": "sl3ebLFmfp3eLlHbciODf",
        "name": "Machhapuchhre FM",
        "streamUrl": "https://live.itech.host:2680/stream",
        "frequency": 91.0,
        "address": "Pokhara, Kaski",
        "province": 4
    },
    {
        "id": "Ug5Z9L4OfU4h9I_Aj0_j4",
        "name": "Radio Kushum",
        "streamUrl": "http://streaming.hamropatro.com:8056",
        "frequency": 90.0,
        "address": "Kusma, Parbat",
        "province": 4
    },
    {
        "id": "skDbFCAwjSGuJ-HoSqy3L",
        "name": "Music Joy Radio",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": null,
        "address": "Kuleshwor, Kathmandu",
        "province": 3
    },
    {
        "id": "i0w44_MpVXQ8HWQqr7hH6",
        "name": "Radio All Star Online",
        "streamUrl": "http://live.itechnepal.com:7039/stream?type=.mp3",
        "frequency": null,
        "address": "Udaypur, Nepal",
        "province": 1
    },
    {
        "id": "LXMYFGAZ6YgxAl50GW-Gv",
        "name": "Radio Paschim Awaj",
        "streamUrl": "https://live.itech.host:3230/stream",
        "frequency": 104.7,
        "address": "Lamki chuha, Kailali",
        "province": 7
    },
    {
        "id": "2SwNodcIwTTIQYyv4Tyyu",
        "name": "Radio Society FM",
        "streamUrl": "http://live.itech.host:1680/stream",
        "frequency": 89.0,
        "address": "Mangalsen, Achham",
        "province": 7
    },
    {
        "id": "rid9b-kawZKKDGnNmILUt",
        "name": "Sunrise Radio",
        "streamUrl": "https://direct.sharp-stream.com/sunriseradio.mp3",
        "frequency": null,
        "address": "Sunrise Radio, 694-712 London Road, Hounslow, London, United Kingdom"
    },
    {
        "id": "RSCPhoXjnAUYdQvm9epur",
        "name": "Radio Terhathum ",
        "streamUrl": "https://live.itech.host:9155/stream",
        "frequency": 92.4,
        "address": "Terhathum, Koshi Ph No. 9852053348",
        "province": 1
    },
    {
        "id": "CtAscG3pUp3l6enA51kCc",
        "name": "Ruru FM",
        "streamUrl": "https://stream.zeno.fm/4pfph3kr44zuv",
        "frequency": 94.8,
        "address": "Chatrakot 02 Gulmi",
        "province": 5
    },
    {
        "id": "W_bazJdnTEN9sGzGiNMs4",
        "name": "Radio Sarangi (Pokhara)",
        "streamUrl": "https://streaming.softnep.net:10982/;stream.nsv&type=mp3&volume=70",
        "frequency": 101.3,
        "address": "Pokhara, Kaski",
        "province": 4
    },
    {
        "id": "grp4t5UfjPt4HfPltN97o",
        "name": "Shakti FM",
        "streamUrl": "http://streaming.hamropatro.com:8709",
        "frequency": 103.4,
        "address": "Hetauda 4, Makawanpur",
        "province": 3
    },
    {
        "id": "mjNxnuuQqpR7r6qzRBmX5",
        "name": "Shreenagar FM",
        "streamUrl": "https://live.itech.host:9598/stream",
        "frequency": 93.2,
        "address": "Tansen, Palpa",
        "province": 5
    },
    {
        "id": "DizHOi8XLbJmDXdp1J4Ts",
        "name": "Radio Deurali",
        "streamUrl": "http://streaming.hamropatro.com:8569",
        "frequency": 101.0,
        "address": "Sandhikharka-1, Arghakhachi",
        "province": 5
    },
    {
        "id": "g7HX5EKmEk8TZoIm_gqcV",
        "name": "Triveni Times FM 100.6",
        "streamUrl": "http://216.55.141.189:8046",
        "frequency": 100.6,
        "address": "Chitwan, Bharatpur Nepal",
        "province": 3
    },
    {
        "id": "9bfFbk30xuc49fO55LfVh",
        "name": "Radio Ekata",
        "streamUrl": "http://216.55.141.189:8515",
        "frequency": 92.4,
        "address": "Lalbandi Municipality-9,Sarlahi",
        "province": 2
    },
    {
        "id": "dV0ljH3el0rnuiN1oxZH4",
        "name": "Radio Hamro Paila FM",
        "streamUrl": "https://live.itech.host:8719/stream",
        "frequency": 91.6,
        "address": "Khalanga,Jajarkot",
        "province": 6
    },
    {
        "id": "9zaaKxF1L3MjgioABn5OP",
        "name": "Radio Rasuwa",
        "streamUrl": "https://streaming.softnep.net:10992/",
        "frequency": 102.1,
        "address": "Rasuwa-5, Dhunche",
        "province": 3
    },
    {
        "id": "LCz6bwY7k87-91DNoC_Wd",
        "name": "Radio Jajarkot",
        "streamUrl": "https://live.itech.host:2360/stream",
        "frequency": 105.6,
        "address": "Bheri Municipality-3, Jajarkot",
        "province": 6
    },
    {
        "id": "mAvgtkvjJAPcFjcPIioRg",
        "name": "Radio Tiphadee",
        "streamUrl": "https://live.itech.host:9382/stream",
        "frequency": 99.1,
        "address": "Manthali, Ramechhap",
        "province": 3
    },
    {
        "id": "2RN8xgZAVB66y84pb2PjQ",
        "name": "Pakhribas FM",
        "streamUrl": "https://live.itech.host:7051/stream",
        "frequency": 104.0,
        "address": "Khandbari-1, Sankhuwasabha",
        "province": 1
    },
    {
        "id": "dJXpWHev69dhb6zuXxkk7",
        "name": "Radio Karnali FM Jumla",
        "streamUrl": "http://216.55.141.189:8773",
        "frequency": 105.2,
        "address": "Jumla, Karnali, Nepal",
        "province": 6
    },
    {
        "id": "lSDiFz5y_ZYp2BAr_0FpX",
        "name": "Radio Barathawa",
        "streamUrl": "https://stream.zeno.fm/as8n057z4k8uv",
        "frequency": 101.1,
        "address": "Barathwa, Sarlahi",
        "province": 2
    },
    {
        "id": "UmzPflv27vd5x6sm6Hkga",
        "name": "Radio Burtibang",
        "streamUrl": "http://streaming.hamropatro.com:8016/",
        "frequency": 95.6,
        "address": "Burtibang, Baglung",
        "province": 4
    },
    {
        "id": "C6jpwtbEambf_oRAN7dIC",
        "name": "Radio Kalaiya",
        "streamUrl": "http://streaming.hamropatro.com:8296",
        "frequency": 101.7,
        "address": "Kalaiya-4, Bara",
        "province": 2
    },
    {
        "id": "asHTsUBTVh65uXGECkr48",
        "name": "Sirish FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8002/stream",
        "frequency": 92.8,
        "address": "Katahari-2, Biratnagar, Morang",
        "province": 1
    },
    {
        "id": "MZhaVDd3tPTdfQaAALJxE",
        "name": "Radio Ghanteshwor",
        "streamUrl": "https://canada1.reliastream.com/proxy/narendra?mp=/stream",
        "frequency": null,
        "address": "Budar, Doti",
        "province": 7
    },
    {
        "id": "4HEAyP78tNJkzwgL9XiPu",
        "name": "Hamro malika FM",
        "streamUrl": "http://streaming.hamropatro.com:8112",
        "frequency": 99.0,
        "address": "Lamki Chua-1, Kailali",
        "province": 7
    },
    {
        "id": "QJyIzOc0XLeJxXCl4G6Ze",
        "name": "Colors FM",
        "streamUrl": "http://stream.orangictech.com.np:8050/colorsfm.mp3",
        "frequency": 102.4,
        "address": "Sita Chowk, Janakpurdham-1, Nepal",
        "province": 2
    },
    {
        "id": "BXRLcF-TQNJc1BKNX-ABP",
        "name": "Radio Mayadevi",
        "streamUrl": "http://streaming.hamropatro.com:8379",
        "frequency": 106.1,
        "address": "Banganga Kapilvastu Nepal",
        "province": 5
    },
    {
        "id": "-nVnfDFXrDdDYj0u8gos8",
        "name": "Radio Kanchan",
        "streamUrl": "https://streaming.softnep.net:10907/;stream.nsv&type=mp3&volume=70",
        "frequency": 95.8,
        "address": "Kanchan-3, Haraiya",
        "province": 2
    },
    {
        "id": "TmNxpvnhplG0sBVIBwu8E",
        "name": "24 Nepali Online Radio",
        "streamUrl": "http://node-25.zeno.fm/v3e78tqm5gruv.aac",
        "frequency": null,
        "address": null
    },
    {
        "id": "TMia13GiCzOObxoEj-DN3",
        "name": "Radio Jalpa",
        "streamUrl": "http://streaming.hamropatro.com:8377",
        "frequency": 104.5,
        "address": "Ranipauwa, Nuwakot, Nepal",
        "province": 3
    },
    {
        "id": "oM-XYU0zdSqhiNpeJr2pu",
        "name": "Unique FM",
        "streamUrl": "http://streaming.hamropatro.com:8128",
        "frequency": 94.2,
        "address": "Kailashnagar 7, Tansen, Palpa",
        "province": 5
    },
    {
        "id": "D8JdzjZAbM1BysO28njRF",
        "name": "Gurkha Radio",
        "streamUrl": "https://securestream.casthost.net:8033/stream",
        "frequency": null,
        "address": "London, UK"
    },
    {
        "id": "WccZCkmZTa3nZQu1U2vY_",
        "name": "Makalu FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8032/stream",
        "frequency": 92.2,
        "address": "Biratnagar Morang Nepal",
        "province": 1
    },
    {
        "id": "SS0VXRCpxR_mX23bPoGjL",
        "name": "Radio Nikash",
        "streamUrl": "https://live.itech.host:1580/stream",
        "frequency": 93.4,
        "address": "हेटौंडा–४ अजरअमररोड (अजरअमर भवन)",
        "province": 3
    },
    {
        "id": "dFJKVzotJRqR0J_M5xbeV",
        "name": "Radio Nagarik",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8100/stream",
        "frequency": 100.4,
        "address": "Biratnagar,06- Morang,Nepal",
        "province": 1
    },
    {
        "id": "LQE7hRX65i_OgFfqE1O73",
        "name": "Radio Bijayabasti",
        "streamUrl": "http://streaming.hamropatro.com:8333",
        "frequency": 90.1,
        "address": "Nirmal Basti, Thori, Parsa",
        "province": 2
    },
    {
        "id": "86NT1PtJNHdt1YzajvFvE",
        "name": "Radio Mahila Aawaj",
        "streamUrl": "http://streaming.hamropatro.com:8361",
        "frequency": 90.0,
        "address": "Khalanga-5, Pyuthan",
        "province": 5
    },
    {
        "id": "CcTKWtc3e854P4pAgn7AY",
        "name": "Radio Samarthya",
        "streamUrl": "http://streaming.hamropatro.com:8365",
        "frequency": null,
        "address": "Kawasoti, Nawalparasi",
        "province": 5
    },
    {
        "id": "TFtatGGpCbEdTD8zWQm3g",
        "name": "Halesi FM",
        "streamUrl": "http://185.181.63.148:8010/halesifm",
        "frequency": 102.4,
        "address": "DiktelRupakot Majhuwagadhi Municlipty 01 Diktel",
        "province": 1
    },
    {
        "id": "GtshKbU6xsrcOLmXcrbSz",
        "name": "Darpan FM",
        "streamUrl": "https://live.itech.host:1730/stream",
        "frequency": 99.2,
        "address": "Madhyabindu-7, Chormara, Nawalparasi",
        "province": 5
    },
    {
        "id": "t-18jT6qUew8K5OV8e6K2",
        "name": "Radio Kapurkot FM",
        "streamUrl": "http://streaming.hamropatro.com:8493",
        "frequency": 106.1,
        "address": "Salyan, Kapurkot, Nepal",
        "province": 6
    },
    {
        "id": "pYP7nHuZvDJZ5REarGcoL",
        "name": "Radio Tahalka",
        "streamUrl": "http://live.itech.host:8910/stream?mp3",
        "frequency": 91.9,
        "address": "SaNaPa-2, Khalanga, Salyan",
        "province": 6
    },
    {
        "id": "EOHV5XPYpYdwo7iOtHunn",
        "name": "Radio Malarani",
        "streamUrl": "http://streaming.hamropatro.com:8755",
        "frequency": 95.7,
        "address": null
    },
    {
        "id": "12kga5f78u7s5ytnxWNc7",
        "name": "Panchthar FM",
        "streamUrl": "http://live.itech.host:2100/stream",
        "frequency": 93.3,
        "address": "Kumayak - 1, Yashok,Panchthar, Nepal",
        "province": 1
    },
    {
        "id": "JL6qIFSD6VyZ7Gh4hkiuo",
        "name": "Radio Paurakhi",
        "streamUrl": "https://live.itech.host:8903/stream?type=.mp3",
        "frequency": 90.4,
        "address": "Thapathali, Bajura",
        "province": 7
    },
    {
        "id": "DKLQ2By3SQ7BtolYXy4WD",
        "name": "Radio Lekhnath",
        "streamUrl": "https://streaming.softnep.net:10848/;stream.nsv&type=mp3",
        "frequency": 106.6,
        "address": "Pokhara metropolitan, 26 sundaribazar kaski, Nepal",
        "province": 4
    },
    {
        "id": "44zVbJxHwKFEb6O4jougD",
        "name": "Radio Mahabharat",
        "streamUrl": "http://streaming.hamropatro.com:8865",
        "frequency": 90.8,
        "address": "Sunkoshi-5, Sindhuli, Nepal",
        "province": 3
    },
    {
        "id": "zslomZ7bB220tXwYwIu9V",
        "name": "Radio Jugal",
        "streamUrl": "http://live.itechnepal.com:2160/stream",
        "frequency": 98.1,
        "address": "सिन्धुपाल्चोक लिसंखुपाखर-५, सिलढुङ्गा, नेपाल",
        "province": 3
    },
    {
        "id": "2aTtVFiHWXk7so1J8uOdU",
        "name": "Madhesh Jana Aawaj FM",
        "streamUrl": "https://stream.zeno.fm/8jom9icy7aduv",
        "frequency": 98.6,
        "address": "Gourada, Rautahat",
        "province": 2
    },
    {
        "id": "yTcgmFxCvWoU97vrCcwHk",
        "name": "Radio Sambridha Nepal",
        "streamUrl": "http://streaming.hamropatro.com:8879",
        "frequency": 92.0,
        "address": "kusma, Parbat",
        "province": 4
    },
    {
        "id": "lF1bJNV95zluaFVzmLWX8",
        "name": "Suryodaya FM",
        "streamUrl": "http://live.itechnepal.com:7165/stream",
        "frequency": 94.0,
        "address": "Sandhikharka -1, Argakhanchi",
        "province": 5
    },
    {
        "id": "CvUD6qzUVWkgoDBPN0gpo",
        "name": "Radio Rhythm",
        "streamUrl": "https://stream.zeno.fm/1zu1zan4mp8uv",
        "frequency": 99.7,
        "address": "Morang, Nepal",
        "province": 1
    },
    {
        "id": "eKm-_l7gNZPHOEjyiKeEG",
        "name": "Radio Anmol",
        "streamUrl": "http://streaming.hamropatro.com:8751",
        "frequency": 90.0,
        "address": "Hetauda 4 Khopegalli",
        "province": 3
    },
    {
        "id": "gZK246rpKVasv4xmpTMoi",
        "name": "Radio Chapakot",
        "streamUrl": "http://live.itech.host:2320/stream",
        "frequency": 91.6,
        "address": "Chapakot-4, Syangja, Nepal",
        "province": 4
    },
    {
        "id": "AaaYA7Vtj7u1Pc8japmIh",
        "name": "Mix FM",
        "streamUrl": "http://live.itech.host:2460/stream",
        "frequency": 89.4,
        "address": "Bidur Municipality -4, Nuwakot",
        "province": 3
    },
    {
        "id": "aVXXQcS1igj12P5DWTvlm",
        "name": "Radio Rastriya",
        "streamUrl": "http://centova1.toofancom.com:4753",
        "frequency": 89.8,
        "address": "Kanchanpur",
        "province": 7
    },
    {
        "id": "thGXhMqv_DyooFzgxkCIM",
        "name": "Radio Dhurkot",
        "streamUrl": "http://streaming.hamropatro.com:8459",
        "frequency": 102.2,
        "address": "Dhurkot-4, Barbot Gulmi",
        "province": 5
    },
    {
        "id": "1OLXp9D9ShPZt0pgLur_1",
        "name": "Radio Sarangkot 104.6",
        "streamUrl": "https://streaming.webhostnepal.com/8054/stream",
        "frequency": 104.6,
        "address": "Pokhara-09 Newroad",
        "province": 4
    },
    {
        "id": "6OnvAO1G2XP-8oCLbEQCg",
        "name": "Bhojpuriya FM",
        "streamUrl": "http://streaming.softnep.net:8143/stream.mp3",
        "frequency": 92.8,
        "address": "Birgunj, Parsa",
        "province": 2
    },
    {
        "id": "tZY6-Z38RTF8pBewH3AaA",
        "name": "Radio Artha Sarokar",
        "streamUrl": "http://live.itech.host:2430/stream?mp3",
        "frequency": null,
        "address": "Koteshwor, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "bv_rdhw2m6XLpBKclAGG5",
        "name": "Galkot FM",
        "streamUrl": "http://live.itech.host:1260/stream?type=.mp3",
        "frequency": 102.4,
        "address": "Galkot-3, Baglung",
        "province": 4
    },
    {
        "id": "7Cd1McH03h5fwaXOcZAkX",
        "name": "Radio Kamal",
        "streamUrl": "http://streaming.hamropatro.com:8849",
        "frequency": null,
        "address": null
    },
    {
        "id": "Xi5IIsYLmJSLx8fgOOHgK",
        "name": "Itahari FM 92.5 MHZ",
        "streamUrl": "http://live.itech.host:2870/stream",
        "frequency": 92.5,
        "address": "Itahari - 6",
        "province": 1
    },
    {
        "id": "tS8xtso7li2wUAHskEecm",
        "name": "Power FM",
        "streamUrl": "http://streaming.hamropatro.com:8587/stream",
        "frequency": 95.6,
        "address": "Bandipur-1, Tanahu",
        "province": 4
    },
    {
        "id": "lBgXR6biCQQmkbfRN3_RD",
        "name": "24 Asal Sathi Radio",
        "streamUrl": "http://streaming.hamropatro.com:4156",
        "frequency": 98.9,
        "address": "Pokhara, Kaski",
        "province": 4
    },
    {
        "id": "HAU6ZqH5gj6suGDlIuqf3",
        "name": "Radio Bulletin",
        "streamUrl": "http://live.itech.host:2650/stream",
        "frequency": 89.7,
        "address": "Hetauda-5, Makawanpur",
        "province": 3
    },
    {
        "id": "iVe6le14RMuEycjfDfWRp",
        "name": "Shaileshwori FM",
        "streamUrl": "https://live.itech.host:8273/stream",
        "frequency": 105.9,
        "address": "Dipayal Silgadhi Municipality-6, Silgadhi, Nepal",
        "province": 7
    },
    {
        "id": "p9f_YlMo19oXbplaym7dj",
        "name": "Radio Malmala",
        "streamUrl": "https://live.itech.host:3180/stream",
        "frequency": 88.6,
        "address": "Sainamaina-2, Kalika Chock, Rupandehi, Nepal",
        "province": 5
    },
    {
        "id": "OpmAtyBHBv5G6toNQuUkX",
        "name": "Radio Sandesh",
        "streamUrl": "http://streaming.hamropatro.com:8631",
        "frequency": 89.8,
        "address": "Sunwal-12 ,Nawalparasi",
        "province": 5
    },
    {
        "id": "07lFlWpPOHdwu3NLyl0Wc",
        "name": "Radio Chimteshwor",
        "streamUrl": "http://live.itech.host:8974/stream?mp3",
        "frequency": 90.9,
        "address": "Belkot, Nuwakot",
        "province": 3
    },
    {
        "id": "ORUVaJBXTu9kCONzdiR6m",
        "name": "Heart FM",
        "streamUrl": "https://live.itech.host:9592/live",
        "frequency": 87.6,
        "address": "Dharan-15 , Sunsari",
        "province": 1
    },
    {
        "id": "Bs7o1CxkbaQ-gsMHEoJKg",
        "name": "3 Angels Community Radio",
        "streamUrl": "http://streaming.hamropatro.com:8234",
        "frequency": 94.6,
        "address": "Pokhara, Kaski",
        "province": 4
    },
    {
        "id": "LWj98jJiMplH-_KM7nKyb",
        "name": "Radio Bharosa",
        "streamUrl": "http://216.55.141.189:8268",
        "frequency": null,
        "address": "Hetauda -14, Mayur Dhap, Sirantol Makawanpur",
        "province": 3
    },
    {
        "id": "iFYZorRvgvmQ_z77bNAO_",
        "name": "Online Radio Darpan",
        "streamUrl": "http://onlineradio.websoftitnepal.com:8006/",
        "frequency": null,
        "address": "Shikha Media Pvt.Ltd. Sunwal-1, Nawalparasi, Lumbini",
        "province": 5
    },
    {
        "id": "5a7s_FmtHJCb38i13ifYX",
        "name": "Radio Sarangi (Morang)",
        "streamUrl": "https://streaming.softnep.net:10982/;stream.nsv&type=mp3&volume=70",
        "frequency": null,
        "address": "Haraincha Municipality-3, Biratchowk, Morang",
        "province": 1
    },
    {
        "id": "TgbhqMh0ptxRpwqBa-QST",
        "name": "Radio Sunwal",
        "streamUrl": "https://live.itech.host:8815/stream",
        "frequency": 90.7,
        "address": "Sunwal-1, Nawalparasi",
        "province": 5
    },
    {
        "id": "ELRST3VqSk-IUeE-cl-_C",
        "name": "Siddhartha  FM",
        "streamUrl": "http://live.itech.host:9575/stream",
        "frequency": 98.8,
        "address": "Siddharthanagar -8, BP Path, Bhairahawa",
        "province": 5
    },
    {
        "id": "6GdfAuOiO9e7xVf783Hsm",
        "name": "Kalika FM Musical",
        "streamUrl": "http://streaming.softnep.net:8740",
        "frequency": 91.0,
        "address": "Bharatpur -10, Kalika marg",
        "province": 3
    },
    {
        "id": "IyJDvhUkdGxPeEp73eDRH",
        "name": "Sanatan Radio Network",
        "streamUrl": "http://216.55.141.189:8857/;stream.mp3",
        "frequency": null,
        "address": "Chitwan , Nepal",
        "province": 3
    },
    {
        "id": "t-9tZl54k6VD4lwvxCNIJ",
        "name": "Radio Devghat",
        "streamUrl": "http://streaming.hamropatro.com:8855",
        "frequency": 102.6,
        "address": "Devghat-5, Tanahun",
        "province": 4
    },
    {
        "id": "E9aOupi2gDSu6YDJmgDKj",
        "name": "Radio Tharuhat",
        "streamUrl": "https://stream.zeno.fm/pq0bz4vez38uv",
        "frequency": null,
        "address": "Karaiyamai-1, Bara",
        "province": 2
    },
    {
        "id": "483UhRqyxkQlYOfCgFK2u",
        "name": "Sunakhari Radio live",
        "streamUrl": "https://live.itech.host:9526/stream",
        "frequency": 91.4,
        "address": "Sunakhari Radio Live 91.4 MHz Khandbari, Sankhuwasabha",
        "province": 1
    },
    {
        "id": "QOdBdb8IWKpAIGNUi3V9a",
        "name": "Radio Devdaha",
        "streamUrl": "https://live.itech.host:9436/stream",
        "frequency": 106.6,
        "address": "Devdaha-5, khaireni, Rupandehi",
        "province": 5
    },
    {
        "id": "yBPTqkn7pnnN5uRifGWgJ",
        "name": "Radio Pratibodh F.M",
        "streamUrl": "http://streaming.hamropatro.com:8036",
        "frequency": 102.4,
        "address": "Kohalpur-11, Banke",
        "province": 5
    },
    {
        "id": "MdXpraKCuPGxnX7Q7uD90",
        "name": "Radio Siddhababa",
        "streamUrl": "https://live.itech.host:8442/stream",
        "frequency": 98.4,
        "address": "Kamalamai-4,Sindhuli Bagamati Pradesh Nepal",
        "province": 3
    },
    {
        "id": "1Jz9iLNg3ixJLBXk28FAp",
        "name": "Radio Chautari",
        "streamUrl": "https://live.itech.host:9388/stream",
        "frequency": 91.4,
        "address": "Besisahar-8, Narayansthan Chowk, Lamjung",
        "province": 4
    },
    {
        "id": "kyP0So3UoiQmCRM_dMnV9",
        "name": "Radio Derby",
        "streamUrl": "https://centova1.toofancom.com/proxy/radioderby?mp=/stream",
        "frequency": null,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "0HgmhM0kxZBflpplik_iH",
        "name": "Radio Manahari FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8170/stream",
        "frequency": 104.3,
        "address": "मनहरी एफएम १०४.३ मेघाहर्ज मनहरी–७, मकवानपुर",
        "province": 3
    },
    {
        "id": "A4KZxjbj2CJnf13y1427h",
        "name": "Happy FM",
        "streamUrl": "http://streaming.softnep.net:8263/",
        "frequency": 103.8,
        "address": "Devchuli-13,Daldale, Nawalpur",
        "province": 4
    },
    {
        "id": "b9vGf6LY98NoVdhNrHkSD",
        "name": "Radio Tamor",
        "streamUrl": "https://live.itech.host:8945/stream",
        "frequency": 102.0,
        "address": "Phungling Municipality-07 Helipyad, Taplejung",
        "province": 1
    },
    {
        "id": "NBmAYL_ZM78TZeAJGjGfV",
        "name": "Namaste FM",
        "streamUrl": "https://live.itech.host:7019/stream",
        "frequency": 107.2,
        "address": "Itahari-6, Sunsari",
        "province": 1
    },
    {
        "id": "_F5QNnkvlKmwxIBfeX16w",
        "name": "Radio Maurakhara FM",
        "streamUrl": "http://streaming.softnep.net:8317",
        "frequency": 106.5,
        "address": "Sanibhaeri, Rukum",
        "province": 6
    },
    {
        "id": "dumLiESebUDLHL0EMzfwy",
        "name": "Nagarik FM",
        "streamUrl": "https://live.itech.host:4675/stream?type=.mp3",
        "frequency": 107.5,
        "address": "Bhadrapur-4, Jhapa",
        "province": 1
    },
    {
        "id": "L7H_5soMEwV978cMrtP-8",
        "name": "Radio Sandesh 106.9",
        "streamUrl": "http://streaming.hamropatro.com:8579",
        "frequency": 106.9,
        "address": "Hetauda-4, Kantirajpath, Makawanpur, Bagamati Province",
        "province": 3
    },
    {
        "id": "DegI5knkXCxWoDl1Oatyt",
        "name": "Bhorukawa FM",
        "streamUrl": "https://live.itech.host:8379/stream",
        "frequency": 92.8,
        "address": "Rajbiraj - 2 (Tetrigachhi Chowk), Saptari, Nepal",
        "province": 2
    },
    {
        "id": "1iPfm9uboUU4HbqdQKK3p",
        "name": "Khulaasa News",
        "streamUrl": "http://streaming.softnep.net:8341/",
        "frequency": null,
        "address": "त्रियुगा नगरपालिका - ११, गाईघाट, उदयपुर",
        "province": 1
    },
    {
        "id": "iPyYG1l-FdiHTXApuU-TS",
        "name": "Radio Rukmini",
        "streamUrl": "http://streaming.hamropatro.com:8853",
        "frequency": 92.2,
        "address": "Sisne Gaunpalika-6, Rukumkot Rukum East",
        "province": 6
    },
    {
        "id": "HAe0V_6NH2pWVR_UmfEWI",
        "name": "Kohalpur FM",
        "streamUrl": "http://streaming.softnep.net:8265",
        "frequency": 101.5,
        "address": "Kohalpur-11, Sajhachowk, Banke",
        "province": 5
    },
    {
        "id": "C6W277h0gJY0NduOKVaKK",
        "name": "Kochila  FM",
        "streamUrl": "http://streaming.softnep.net:8307/",
        "frequency": 91.5,
        "address": "Sunsari, Nepal",
        "province": 1
    },
    {
        "id": "Z1O8wdXmEbWY-feVVYy5P",
        "name": "NepalBodh",
        "streamUrl": "http://streaming.softnep.net:8241/",
        "frequency": null,
        "address": "Beldandi - 01, Kanchanpur",
        "province": 7
    },
    {
        "id": "uI9iDzENe7o2tnpmUjc5Q",
        "name": "Radio Nigarani",
        "streamUrl": "http://streaming.hamropatro.com:5501",
        "frequency": 107.0,
        "address": "Ishwarpur Mun.-6, Bayalbas Bazaar",
        "province": 2
    },
    {
        "id": "tbeTBLQp8gGx2TCVL4r4-",
        "name": "Radio Tufan",
        "streamUrl": "http://streaming.hamropatro.com:8761",
        "frequency": 102.4,
        "address": "Barahathawa-5, Sarlahi Pradesh-2",
        "province": 2
    },
    {
        "id": "F1vYBhlLJShfT3Xzr2jm2",
        "name": "Radio Bandhan",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8082/stream",
        "frequency": 99.2,
        "address": "Sarlahi, Nepal",
        "province": 2
    },
    {
        "id": "9mGTOx-tKD0f6Walain4W",
        "name": "Radio Shringeshwor (SFM)",
        "streamUrl": "https://stream-152.zeno.fm/1qgfbe6sz1zuv",
        "frequency": 104.4,
        "address": "Chhatrakot 3, Gulmi",
        "province": 5
    },
    {
        "id": "d2O6kQxTaWhQhpy_XutaZ",
        "name": "Radio Kaski 96.5",
        "streamUrl": "http://streaming.hamropatro.com:8495",
        "frequency": 96.5,
        "address": "New Road - 8, Pokhara",
        "province": 4
    },
    {
        "id": "mLEuR_ibya1TkpWi9dfOI",
        "name": "Radio Purbirukum",
        "streamUrl": "https://live.itech.host:1570/stream",
        "frequency": 103.2,
        "address": "Rukum East, Lumbini Provence",
        "province": 5
    },
    {
        "id": "S-GS05dR7z1QQ2XBsRVoC",
        "name": "Radio Pariwartan",
        "streamUrl": "http://centova1.toofancom.com:4770",
        "frequency": 89.4,
        "address": "Itahari-5, Sunsari",
        "province": 1
    },
    {
        "id": "U_7zMZconBW03Lgrjgz3S",
        "name": "Radio Aandhikhola",
        "streamUrl": "https://live.itech.host:8863/stream",
        "frequency": null,
        "address": "info@domainname.com"
    },
    {
        "id": "i6PH2y9_mCarY_TCsTFd8",
        "name": "Radio Bijayakilla",
        "streamUrl": "http://streaming.hamropatro.com:8719",
        "frequency": 93.0,
        "address": "Kamalamai Municipality-6, Sindhuli",
        "province": 3
    },
    {
        "id": "h0BEAjGwdn6EOQy2IWHrI",
        "name": "Katahariya FM",
        "streamUrl": "https://live.itech.host:4590/stream",
        "frequency": 93.8,
        "address": "Katahariya Municipality-5, Rautahat",
        "province": 2
    },
    {
        "id": "d_R7ycY_MjpupOsJwaF8X",
        "name": "Baideshik Rojgar",
        "streamUrl": "http://stream.zeno.fm/5uewmme4e8zuv",
        "frequency": null,
        "address": null
    },
    {
        "id": "gDTV8jRk6R03qA2yat0O-",
        "name": "Radio Manko Majheri",
        "streamUrl": "http://live.itech.host:2620/stream",
        "frequency": 91.0,
        "address": "Ghodaghodi Municipality- 10, Pahalmanpur Kailali",
        "province": 7
    },
    {
        "id": "HbBA8bMFoXO9NeMikeMCk",
        "name": "Radio Puspanjali",
        "streamUrl": "http://streaming.hamropatro.com:8679",
        "frequency": 97.4,
        "address": "Musikot Municipality-7, Gulmi",
        "province": 5
    },
    {
        "id": "zKb-qTZaZKAvFTRkxP7Pn",
        "name": "Radio Sauraha",
        "streamUrl": "https://streaming.softnep.net:10827/",
        "frequency": null,
        "address": "Ratnanagar Municipality 6 Sauraha, Chitwan",
        "province": 3
    },
    {
        "id": "kGU3QjK672ZeENh7PsGEW",
        "name": "Radio Bheriganga",
        "streamUrl": "https://live.itech.host:8006/stream",
        "frequency": null,
        "address": "Bheriganga Mun-12 Surkhet",
        "province": 6
    },
    {
        "id": "7e4xb8FhGgjajJDY-Hnsr",
        "name": "Radio Swabhiman",
        "streamUrl": "https://ec1.everestcast.host:1225/stream?type=.mp3",
        "frequency": null,
        "address": " Gokarneshwor Municipality-7, Kathmandu",
        "province": 3
    },
    {
        "id": "MG9LsKGJNy68mg6f9iqGv",
        "name": "Radio Bageshwori FM",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8050/radio.mp3",
        "frequency": 94.6,
        "address": "Nepalgunj Sub metropolitancity -10 Aadarsha Nagar, Banke, Nepal",
        "province": 5
    },
    {
        "id": "CqD0vKxeGohmhESEM4xtt",
        "name": "Radio Jhankar",
        "streamUrl": "http://streaming.hamropatro.com:8090",
        "frequency": 97.5,
        "address": "Manthali-1, Ramechhap",
        "province": 3
    },
    {
        "id": "SrZyluYRih5cZXECh-zwP",
        "name": "Radio Chaudandigadhi FM",
        "streamUrl": "http://chaudandigadhi.online.org.np:8098",
        "frequency": 94.4,
        "address": "Beltar, udayapur",
        "province": 1
    },
    {
        "id": "Wdpir-zyrywMXE7IqoD78",
        "name": "Radio Gurkhali",
        "streamUrl": "https://live.itech.host:9502/stream",
        "frequency": 106.0,
        "address": "Pokhara, Nepal",
        "province": 4
    },
    {
        "id": "DdXjxBJwWjUWl_vVlTBnv",
        "name": "Jayaprithvi FM",
        "streamUrl": "https://streaming.softnep.net:10824/;",
        "frequency": 96.3,
        "address": "jayaprithvi municipality -10 Chainpur, Bajhang",
        "province": 7
    },
    {
        "id": "dPFdZh3xMkhRHmIX2IVri",
        "name": "Samabeshi FM",
        "streamUrl": "http://streaming.hamropatro.com:5511",
        "frequency": 92.3,
        "address": "Katari, Udayapur, Katari, Benin",
        "province": 1
    },
    {
        "id": "KCdBCtcagJ4f18xJmdUf-",
        "name": "Naya Aviyan FM",
        "streamUrl": "https://live.itech.host:3280/stream",
        "frequency": 99.0,
        "address": "Sankhuwasabha, Mude Sanishare",
        "province": 1
    },
    {
        "id": "wNvy8p6CHLusJvD6womuD",
        "name": "NB Radio Network",
        "streamUrl": "https://streaming.softnep.net:10877/;",
        "frequency": null,
        "address": " Beldandi - 01, Kanchanpur",
        "province": 7
    },
    {
        "id": "-SIjub787tzJOo7FFnSBM",
        "name": "Radio Kanchanpur",
        "streamUrl": "http://live.itechnepal.com:8294/stream",
        "frequency": 90.2,
        "address": "Mahendranagar -4, Kanchanpur",
        "province": 7
    },
    {
        "id": "-xkU5s2nTFfDIvl7jdMH7",
        "name": "Radio Khotang",
        "streamUrl": "http://streaming.hamropatro.com:8813",
        "frequency": 103.3,
        "address": "Khotang halesi nagarpalika,durchhim ",
        "province": 1
    },
    {
        "id": "W946-D5UBefvE9a7sn9tx",
        "name": "Radio  Aarambha",
        "streamUrl": "http://streaming.hamropatro.com:5515",
        "frequency": 97.5,
        "address": "Gurbhakot-08, Surkhet",
        "province": 6
    },
    {
        "id": "b_jl4QV-wAaml4EmOeH8q",
        "name": "Radio Rapti",
        "streamUrl": "https://live.itech.host:3250/stream",
        "frequency": 104.8,
        "address": null
    },
    {
        "id": "KO4sLmO-SnbrBCfaBowpN",
        "name": "Apan FM",
        "streamUrl": "http://streaming.hamropatro.com:8445",
        "frequency": 96.8,
        "address": "Rajbiraj-7. Pulchowk, Saptari",
        "province": 2
    },
    {
        "id": "w1rjvz0geIf7QB51u76q9",
        "name": "Radio Naya Karnali FM",
        "streamUrl": "https://live.itech.host:8501/stream",
        "frequency": 102.8,
        "address": "Kalikot",
        "province": 6
    },
    {
        "id": "rUy648ruS-0r2p4KP9OR3",
        "name": "Radio Dhading",
        "streamUrl": "https://live.itech.host:9454/stream",
        "frequency": 106.0,
        "address": "Neelkantha -5,Dhading Bensi, Dhading",
        "province": 3
    },
    {
        "id": "dRbvSAz8sUtsh02eGFhIn",
        "name": "Bhairab Radio",
        "streamUrl": "http://stream.zeno.fm/qe715t14gwzuv",
        "frequency": null,
        "address": "Tansen-6, Palpa",
        "province": 5
    },
    {
        "id": "EWO_WmmjYXXTOpqrE5I3P",
        "name": "Radio BSC Nepal",
        "streamUrl": "https://live.itech.host:2800/stream",
        "frequency": 91.8,
        "address": "Phidim, Paanchthar",
        "province": 1
    },
    {
        "id": "29ulfcMMJE8hYwpku6GOI",
        "name": "Radio Bannigadhi",
        "streamUrl": "https://live.itech.host:4665/stream",
        "frequency": 93.4,
        "address": null
    },
    {
        "id": "BT9uf-333S6WbfsBKkldt",
        "name": "Radio Okhaldhunga FM",
        "streamUrl": "https://sp14.instainternet.com/8138/stream",
        "frequency": 105.6,
        "address": "Siddhicharan -11 Ramailodanda, Okhaldhunga",
        "province": 1
    },
    {
        "id": "uFXF-jXHhJblnJU00se0t",
        "name": "Radio Rupantaran",
        "streamUrl": "https://stream.zeno.fm/nsxexttokuhvv",
        "frequency": null,
        "address": null
    },
    {
        "id": "xIpq-FeQ8EFTaVSsr2IWk",
        "name": "Bulbule FM",
        "streamUrl": "http://216.55.141.189:8573",
        "frequency": 103.4,
        "address": "Birendranagar-9, Mangalgadhi Chowk Surkhet",
        "province": 6
    },
    {
        "id": "gKjb_yXkHMk5nmDRiDrOh",
        "name": "Radio Nagarik Chaso",
        "streamUrl": "http://streaming.softnep.net:8357",
        "frequency": null,
        "address": "Sankhuwasabha",
        "province": 1
    },
    {
        "id": "dtSoDtSb6t7kFbFUFLQgZ",
        "name": "Radio Badimalika",
        "streamUrl": "https://live.itech.host:4755/stream",
        "frequency": 95.2,
        "address": "Trinbeni- 7, Bajura",
        "province": 7
    },
    {
        "id": "s7tgvXGRP-DYlxSde8ZVZ",
        "name": "Radio Mission",
        "streamUrl": "http://centova1.toofancom.com:4163",
        "frequency": 105.3,
        "address": "Indrawati -5, Sindhupalchowk",
        "province": 3
    },
    {
        "id": "VTMfwJp231iG_Ax2Bw8Gm",
        "name": "Best FM",
        "streamUrl": "https://streaming.webhostnepal.com/8030/stream",
        "frequency": 88.1,
        "address": null
    },
    {
        "id": "1oQ486Lrf7jEUfSy_k2_5",
        "name": "Radio Durga Bhagawati",
        "streamUrl": "http://streaming.hamropatro.com:8753",
        "frequency": 96.6,
        "address": "Durga Bhagawati-2, Rautahat",
        "province": 2
    },
    {
        "id": "_dERlS1BlofJUZbCLsKtK",
        "name": "Radio Lipulek",
        "streamUrl": "http://216.55.141.189:8321",
        "frequency": 99.6,
        "address": " Shailyashikhar-6, Panebaj Darchula",
        "province": 7
    },
    {
        "id": "ORhIrB3CIZ51de3ofD0aF",
        "name": "Radio Ganatantra Aawaj",
        "streamUrl": "https://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 102.7,
        "address": " Bungal-4, Bizgada Bajhang",
        "province": 7
    },
    {
        "id": "d4Rcry-arayJV5FO9Rsqf",
        "name": "Radio Baitadi",
        "streamUrl": "http://95.217.153.73:8044/;",
        "frequency": 95.4,
        "address": "Dashrathchand-2, Dehimandau Baitadi",
        "province": 7
    },
    {
        "id": "oEo4Cm7l-DaugUSu7J-Wf",
        "name": "Radio Active FM",
        "streamUrl": "http://95.217.153.73:8042/;",
        "frequency": 97.2,
        "address": "Dhangadi-2, Dhangadhi, Kailali",
        "province": 7
    },
    {
        "id": "4tCz_fxUOArJnSTfxwqqx",
        "name": "Radio Indrasarowar",
        "streamUrl": "https://live.itech.host:3100/stream",
        "frequency": 105.8,
        "address": "Indrasarowar-1, Markhu Makwanpur, Nepal",
        "province": 3
    },
    {
        "id": "v1TiKT4Pw14-PWgc6GLjb",
        "name": "Nsanchar Online Radio",
        "streamUrl": "https://stream.zeno.fm/uyo4dbsay4cuv",
        "frequency": null,
        "address": "Kawasoti-3, Nawalpur",
        "province": 4
    },
    {
        "id": "uLFjNtwaB6-ARsk0JF_wl",
        "name": "Shepherd FM (Chitwan)",
        "streamUrl": "http://centova1.toofancom.com:5180",
        "frequency": 89.2,
        "address": "Deep chock, Bharatpur Metropolitan, Chitwan, Nepal",
        "province": 3
    },
    {
        "id": "ppmrkB4yfHcuCympknioP",
        "name": "Radio Melauli",
        "streamUrl": "https://streaming.webhostnepal.com/8014/stream",
        "frequency": null,
        "address": "Melauli-1, Baitadi",
        "province": 7
    },
    {
        "id": "qYCQhHDgj0c8H4Own4aTb",
        "name": "Jhuleni FM",
        "streamUrl": "http://streaming.hamropatro.com:8803",
        "frequency": 104.7,
        "address": null
    },
    {
        "id": "wcd4xLFWDf0wRh7Wr_5ue",
        "name": "Radio Kairan",
        "streamUrl": "http://streaming.hamropatro.com:8793",
        "frequency": 96.4,
        "address": "Umakunda-2, Bamti-Bhandar, Deurali, Ramechhap, Nepal",
        "province": 3
    },
    {
        "id": "59MkZc7ECFvkp3VXE2k-k",
        "name": "Radio Energy 106.2 MHz",
        "streamUrl": "http://streaming.hamropatro.com:8799",
        "frequency": 106.2,
        "address": null
    },
    {
        "id": "PzCjq62C3pKPzBrE6FUmY",
        "name": "Radio Bhimeshwar",
        "streamUrl": "https://live.itech.host:4495/stream",
        "frequency": null,
        "address": "Charikot Dolakha",
        "province": 3
    },
    {
        "id": "bQIdzdX6G7OURgUW9H6Qg",
        "name": "Radio Jwala Fm",
        "streamUrl": "http://streaming.hamropatro.com:8801/stream",
        "frequency": 100.4,
        "address": "Dailekh Bazar Dailekh",
        "province": 6
    },
    {
        "id": "heTRSx1cMdjdzYNluuogZ",
        "name": "Radio Prabhu FM",
        "streamUrl": "http://streaming.hamropatro.com:8805",
        "frequency": 102.6,
        "address": "Shuklaphanta 10 kanchanpur Nepal",
        "province": 7
    },
    {
        "id": "t8ZD_fVRyDqBlYCOHuqgB",
        "name": "Radio Bagmati",
        "streamUrl": "http://streaming.hamropatro.com:8363",
        "frequency": 91.5,
        "address": "Bagmati-2 Sarlahi, Nepal",
        "province": 2
    },
    {
        "id": "Km7n3lYNlqCl6jLNxyEVF",
        "name": "Darshan Fm Online",
        "streamUrl": "http://streaming.hamropatro.com:8363",
        "frequency": null,
        "address": "Bagmati-11, sarlahi",
        "province": 2
    },
    {
        "id": "0yMPqSZrbMv0BDtKfm8Cl",
        "name": "Radio Kamalbazar",
        "streamUrl": "http://streaming.hamropatro.com:8172",
        "frequency": 92.3,
        "address": "Kamalbazar, Achham",
        "province": 7
    },
    {
        "id": "qlysFYRrcuNZcmKSkx8TP",
        "name": "Radio Sudur Sanchar",
        "streamUrl": "http://streaming.hamropatro.com:8010",
        "frequency": 106.5,
        "address": "Belauri, Kanchanpur Nepal",
        "province": 7
    },
    {
        "id": "HrCg_BYnWZkHMSMqovBW9",
        "name": "Radio Hemja",
        "streamUrl": "https://live.itech.host:1510/stream",
        "frequency": 88.5,
        "address": "Pokhara Metropolitan-25 Hemja Milanchowk",
        "province": 4
    },
    {
        "id": "zb2RywfTKhZ1ZDIFaql1M",
        "name": "CIN",
        "streamUrl": "http://streaming.softnep.net:8009",
        "frequency": null,
        "address": "सामुदायिक सूचना नेटवर्क (सीआईएन) चाकुपाट ललितपुर, पाटन",
        "province": 3
    },
    {
        "id": "QOkChPr0mqzpI33u5UpYz",
        "name": "Radio Comedy Champion",
        "streamUrl": "https://online.net.np/8042/stream",
        "frequency": null,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "3IwkA3fVsnqlkmKGWwJwv",
        "name": "Tarahara FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8066/stream",
        "frequency": 102.8,
        "address": "इटहरी 20 तरहरा सुनसरी",
        "province": 1
    },
    {
        "id": "i5w5y9DF6uxcLfpbyBYnQ",
        "name": "Radio Arun",
        "streamUrl": "https://live.itech.host:3090/stream",
        "frequency": 97.6,
        "address": "Chainpur, Sankhuwasabha",
        "province": 1
    },
    {
        "id": "a9kNLeBGU7F_-2I2nZmoB",
        "name": "Radio Sindhuli Gadhi",
        "streamUrl": "https://live.itech.host:1525/stream",
        "frequency": 92.0,
        "address": "कमलामाई नगरपालिका  ( क.न.पा.) - ६ रातमाटा हाईट सिन्धुली",
        "province": 3
    },
    {
        "id": "60KVW2BdSJ6Gh4d_a2arC",
        "name": "Radio Madhaypahad",
        "streamUrl": "http://streaming.hamropatro.com:8815",
        "frequency": 88.2,
        "address": "बागचौर नगरपालिका २ सल्यान, जनताको लागि जनताको रेडियो",
        "province": 5
    },
    {
        "id": "CU3gXVfdj5g2LeCmPpWrU",
        "name": "Janaknandani F.M",
        "streamUrl": "http://rserver.domaininnepal.com:8014/janaknandani",
        "frequency": 95.5,
        "address": "Bhanu Chowk, Kishori Nagar, Janakpur Dham",
        "province": 2
    },
    {
        "id": "NfDOcWjhYAbULZrg3j_Ww",
        "name": "Mithilanchal FM",
        "streamUrl": "https://live.itech.host:8645/stream",
        "frequency": 105.0,
        "address": "जनकपुरधाम, धनुषा, नेपाल",
        "province": 2
    },
    {
        "id": "oAJ5eq735bWFjhocXftEt",
        "name": "Broad FM",
        "streamUrl": "http://streaming.hamropatro.com:8142",
        "frequency": 94.9,
        "address": "Mid Baneshwor-31, Kathmandu",
        "province": 3
    },
    {
        "id": "QtC9xr2cupW4SkVIf_MiK",
        "name": "Radio Gaunghar",
        "streamUrl": "http://streaming.hamropatro.com:8817",
        "frequency": 106.4,
        "address": "मंगलसैन नगरपालिका ६ ठुलासैन अछाम",
        "province": 6
    },
    {
        "id": "Jf9ZTDWnP4YikgUR1a4lI",
        "name": "Radio Galkot",
        "streamUrl": "https://live.itech.host:1270/stream",
        "frequency": 102.4,
        "address": "Galkot Municipality-03, Galkot Baglung",
        "province": 4
    },
    {
        "id": "TT19OCswfBCPImaIYbvUi",
        "name": "Radio Sargam",
        "streamUrl": "http://rstream.abgroupnepal.com:8000/radiosargam",
        "frequency": 88.8,
        "address": "Mechinagar-10 Dhulabari Jhapa",
        "province": 1
    },
    {
        "id": "gC-uB8He3OuKvU5yAt_kz",
        "name": "Radio Bara",
        "streamUrl": "http://stream.zeno.fm/72cb9dcu1nhvv",
        "frequency": 106.6,
        "address": "Kalaiya -Bara Nepal",
        "province": 2
    },
    {
        "id": "STqU3AJp9AlDq2PZKFNo3",
        "name": "Radio Darpan",
        "streamUrl": "http://streaming.hamropatro.com:8797",
        "frequency": 88.4,
        "address": "Gauridanda Mahottari Nepal",
        "province": 2
    },
    {
        "id": "QEqRImfLQ3sxlN07JCNZ4",
        "name": "Radio Samagra",
        "streamUrl": "https://live.itech.host:9394/stream",
        "frequency": 107.0,
        "address": "Lahan-6, Siraha, Nepal",
        "province": 2
    },
    {
        "id": "_pFoCPaZ19fKIL_9VMIiy",
        "name": "Radio Himali",
        "streamUrl": "http://streaming.hamropatro.com:8144",
        "frequency": 101.7,
        "address": "Charikot, Dolakha",
        "province": 3
    },
    {
        "id": "futdbR3WdG4MQeFJAQzdc",
        "name": "Radio Sambridha Nepal (Nesdo Fm)",
        "streamUrl": "http://streaming.hamropatro.com:8897",
        "frequency": 92.6,
        "address": "Birauta-17,Damside Marga,  Kaski Pokhara ",
        "province": 4
    },
    {
        "id": "DevVS80Ebd--JYu7XoQeZ",
        "name": "Radio Naya Nepal FM",
        "streamUrl": "https://live.itech.host:8585/stream",
        "frequency": 104.5,
        "address": "Darchula Nepal",
        "province": 7
    },
    {
        "id": "kRyl4jPz_pf3vLEkcl1TZ",
        "name": "Radio Hamro Samabeshi",
        "streamUrl": "http://streaming.hamropatro.com:8833",
        "frequency": 98.3,
        "address": "Jambukandh Dailekh",
        "province": 6
    },
    {
        "id": "-u1e1tAWJ-L6TxVGZKatw",
        "name": "Radio Bangalachuli",
        "streamUrl": "https://streaming.softnep.net:10826/;stream",
        "frequency": 91.7,
        "address": "बंगलाचुली गाउँपालिका वडा नम्बर -३ कमिरेचौर दाङ लुम्बिनी प्रदेश नेपाल",
        "province": 5
    },
    {
        "id": "Gu05-TwCBKLq7kV8uCx1j",
        "name": "Ganatantra FM",
        "streamUrl": "https://live.itech.host:9167/stream",
        "frequency": 95.1,
        "address": "Dharan-11, Sunsari",
        "province": 1
    },
    {
        "id": "9xGyh_IfKswctkUljf3U7",
        "name": "Dhadkan Fm",
        "streamUrl": "http://streaming.hamropatro.com:8112",
        "frequency": 91.8,
        "address": "Gadaita 8 Sarlahi Nepal",
        "province": 2
    },
    {
        "id": "XQ3zNjhaJ7zV2rGPRVFtU",
        "name": "Radio Serofero",
        "streamUrl": "http://streaming.hamropatro.com:8465",
        "frequency": 90.2,
        "address": null
    },
    {
        "id": "2FluBDIokQX4Ebj-SYa6I",
        "name": "Metro Fm",
        "streamUrl": "http://216.55.141.189:8134",
        "frequency": 94.6,
        "address": "BhrikutiMandap Rastriya SavaGriha, Kathmandu",
        "province": 3
    },
    {
        "id": "Lbpw8ZG83rw_kR_dMaLx4",
        "name": "BG FM",
        "streamUrl": "http://streaming.hamropatro.com:8080",
        "frequency": 93.6,
        "address": "Bheriganga,09 Jahare Bazar Surkhet - Onair Studio : Gurbhakot, 04 Dadadap Surkhet",
        "province": 6
    },
    {
        "id": "KGHEQ9x2Hurhb4K_93v-_",
        "name": "Radio Dadadara",
        "streamUrl": "http://streaming.hamropatro.com:8683",
        "frequency": 104.0,
        "address": "Panchapuri 5, Babiyachaur, Surkhet",
        "province": 6
    },
    {
        "id": "RgjND9aNiETlV7lpcL_Pa",
        "name": "Online Radio Rangin",
        "streamUrl": "http://stream.zeno.fm/6fdza6c95zhvv",
        "frequency": null,
        "address": "Khairawang Media House Pvt.Ltd. Bagchaur Municipality-2, Salyan",
        "province": 6
    },
    {
        "id": "IaDni_XNqqIGUBU3yrYd0",
        "name": "Radio Mission",
        "streamUrl": "http://streaming.hamropatro.com:8769",
        "frequency": 90.6,
        "address": "Kohalpur Banke",
        "province": 5
    },
    {
        "id": "N6CV7Soyk14vJvPcowzxu",
        "name": "Janata Radio",
        "streamUrl": "http://live.itech.host:1970/;?type=http%26nocache=1571378684",
        "frequency": null,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "DyLfGXwuezuQsxvI-_zw4",
        "name": "Heart Beat F.M.",
        "streamUrl": "http://216.55.141.189:8737",
        "frequency": 91.3,
        "address": "Kapilvastu",
        "province": 5
    },
    {
        "id": "gbiM5rpygFxSCBOH7LDGW",
        "name": "Janata Samaj Radio Network",
        "streamUrl": "http://streaming.hamropatro.com:8635",
        "frequency": null,
        "address": "New Baneshwor, Kathmandu",
        "province": 3
    },
    {
        "id": "N8H44CjeEv_56y5A96dUi",
        "name": "UK FM",
        "streamUrl": "http://streaming.hamropatro.com:8843",
        "frequency": 106.8,
        "address": "Katari 3 Udayapur",
        "province": 1
    },
    {
        "id": "0ZWv8YWN5CeZuADG-aSeN",
        "name": "Radio Pariwartan Silaawaj",
        "streamUrl": "http://streaming.hamropatro.com:8849",
        "frequency": null,
        "address": "Jhapa Nepal",
        "province": 1
    },
    {
        "id": "pFOi_Sh-fiSUdiDYtP0K1",
        "name": "Radio Chinari",
        "streamUrl": "http://streaming.hamropatro.com:8849",
        "frequency": null,
        "address": "Sukrabare, Terhathum",
        "province": 1
    },
    {
        "id": "RpTiNcv0NVcntEkKi4j9j",
        "name": "Radio Samakhabar",
        "streamUrl": "https://stream.zeno.fm/nsxexttokuhvv",
        "frequency": null,
        "address": "Kathmandu Metropolitan City-29, Anamnagar, Nepal",
        "province": 3
    },
    {
        "id": "dTrVntaZqD-IWXigKOH9h",
        "name": "Radio Mantra",
        "streamUrl": "http://streaming.hamropatro.com:8831",
        "frequency": 105.4,
        "address": "Mechinagar Jhapa",
        "province": 1
    },
    {
        "id": "Bp0AaqnnaL5eRONSr_V0v",
        "name": "Radio Gangajal",
        "streamUrl": "http://streaming.hamropatro.com:8092",
        "frequency": 87.8,
        "address": "Karjanha Siraha, Nepal",
        "province": 2
    },
    {
        "id": "s7NliryzCNf6wKVddRp5q",
        "name": "Radio laligurans",
        "streamUrl": "https://live.itech.host:8933/stream",
        "frequency": 105.2,
        "address": "Dhankuta Nepal",
        "province": 1
    },
    {
        "id": "OVogGbbgXL6zGjAMIA3BH",
        "name": "Radio Sworgabhumee FM",
        "streamUrl": "http://streaming.hamropatro.com:8681",
        "frequency": 93.0,
        "address": "Swargadwari Municipality-3- Bhingri, Pyuthan",
        "province": 5
    },
    {
        "id": "fnO7Le4SM22F8cyGPBMZa",
        "name": "Radio Aaha",
        "streamUrl": "https://live.itech.host:4060/stream",
        "frequency": 104.5,
        "address": "Dillibazzar, Kathmandu",
        "province": 3
    },
    {
        "id": "CvLB_P6CzdsrJL6ut8kF-",
        "name": "Radio Shimbhunath",
        "streamUrl": "https://live.itech.host:3905/stream",
        "frequency": 104.9,
        "address": "Budinanda Municipality Kolti,2 Bajura",
        "province": 7
    },
    {
        "id": "kWqeGS7Sl_4sBn7fNJyNO",
        "name": "Radio Suprim",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8046/stream",
        "frequency": 88.7,
        "address": "चन्द्रपुर - ४, चन्द्रनिगाहपुर, रौतहट",
        "province": 2
    },
    {
        "id": "LmFHhrmRq9Ib43VXkivqF",
        "name": "Radio Madhesh FM",
        "streamUrl": "http://streaming.hamropatro.com:8347",
        "frequency": 106.6,
        "address": "जनकपुरधाम - ७ जिरोमाईल",
        "province": 2
    },
    {
        "id": "t919z0nxhqn771sW5t0oY",
        "name": "Sarobar Radio Network",
        "streamUrl": "http://streaming.hamropatro.com:8859",
        "frequency": null,
        "address": null
    },
    {
        "id": "-DCS1kD6XZbi3G0-F89Mz",
        "name": "Shubheksha FM",
        "streamUrl": "http://216.55.141.189:8086",
        "frequency": 96.6,
        "address": "Jaimini Municipality - 1 Kushmisera, Baglung",
        "province": 4
    },
    {
        "id": "34RdePV5v0G4C8XYilIp8",
        "name": "Dudhauli Fm",
        "streamUrl": "http://streaming.hamropatro.com:8461",
        "frequency": 97.2,
        "address": "Dudhauli-09 Dudhauli Bazar Sindhuli",
        "province": 3
    },
    {
        "id": "0TBN9YEUWWcOb3muBaAWA",
        "name": "Online FM",
        "streamUrl": "https://stream.zeno.fm/0cu4ikikynntv",
        "frequency": null,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "vfv8pKK4PvqIWEMSVg1tu",
        "name": "Radio Hamro Pahunch",
        "streamUrl": "http://streaming.hamropatro.com:8335",
        "frequency": 89.0,
        "address": "Tulashipur Deputy Metropolitan Municipality 7 jhumare Dang",
        "province": 5
    },
    {
        "id": "K1BOlF07KRhYK0oh_MOOo",
        "name": "Radio KBM",
        "streamUrl": "http://streaming.hamropatro.com:8869",
        "frequency": 107.3,
        "address": "Kamalbazar Municipality .2 Achham Nepal",
        "province": 7
    },
    {
        "id": "Cr_DokmABucGJdfDcupgY",
        "name": "Radio Marin",
        "streamUrl": "http://streaming.hamropatro.com:8871",
        "frequency": 102.7,
        "address": "Marin Gaupalika -1 Sindhuli Nepali",
        "province": 3
    },
    {
        "id": "Nc7ofOFYf48C8kjT7sLup",
        "name": "Radio Sajha Aawaj",
        "streamUrl": "https://live.itech.host:2580/stream",
        "frequency": 90.9,
        "address": "khandachakra Municipality 1 Manma Kalikot",
        "province": 6
    },
    {
        "id": "aE0bNpG9i7Tgu7pwVFSqY",
        "name": "Radio Kabeli",
        "streamUrl": "http://streaming.hamropatro.com:8076",
        "frequency": 95.8,
        "address": "Phalelung rural municipality-03 helipyad. Taplejung",
        "province": 1
    },
    {
        "id": "kdUSJPxzy4SQ4opBQh3lS",
        "name": "Radio ABC",
        "streamUrl": "https://live.itech.host:2300/stream",
        "frequency": 89.8,
        "address": "Kavrepalanchowk, Banepa",
        "province": 3
    },
    {
        "id": "_IHg8oddfIbPFR5GaP-4W",
        "name": "Afno Fm Okhaldhunga",
        "streamUrl": "https://streaming.softnep.net:10969/;stream.nsv&type=mp3&volume=70%22",
        "frequency": 104.8,
        "address": "Siddhicharan Nagarpalika 11 Panityanki, Kamere dada, Okhaldhunga",
        "province": 1
    },
    {
        "id": "82xKtbkh_M6xKces1iCuZ",
        "name": "Darshan FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8118/stream",
        "frequency": 101.5,
        "address": "Dewanganj, Sunsari",
        "province": 1
    },
    {
        "id": "dg8w34u4c-HoZ4stZKvJo",
        "name": "Radio Chhatrabhumi",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8010/radio.mp3",
        "frequency": 93.6,
        "address": "Musikot Municipality 01- Paudi Aamarai Gulmi",
        "province": 5
    },
    {
        "id": "08Hqsc9BnUqnnPmS5VN_c",
        "name": "Radio Kutumba",
        "streamUrl": "http://streaming.hamropatro.com:8885",
        "frequency": 97.8,
        "address": "Palpa Tansen Kailasnagar Lumbini Province",
        "province": 5
    },
    {
        "id": "TjPcKd_tt2LPeVe8z3whF",
        "name": "Upahar FM",
        "streamUrl": "https://live.itech.host:4775/stream",
        "frequency": 95.4,
        "address": "त्रियुगा नगरपालिका ११ गाईघाट  उदयपुर",
        "province": 1
    },
    {
        "id": "cCu73ovwg-PbG9wUSbTYR",
        "name": "Radio Famous Fm",
        "streamUrl": "http://streaming.hamropatro.com:8331",
        "frequency": 94.3,
        "address": "Baijanath 7 Banke Nepal",
        "province": 5
    },
    {
        "id": "mL3B81Bo_4ZiXLe02x31S",
        "name": "Radio Suddhodhan",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8070/radio.mp3",
        "frequency": 95.1,
        "address": "Suddhodhan Gaupalika - 4, Pharshatikar, Rupandehi",
        "province": 5
    },
    {
        "id": "V-VYoSKhj2Eqgl97r-nrV",
        "name": "Smart FM",
        "streamUrl": "http://216.55.141.189:8066",
        "frequency": 106.5,
        "address": "सूदुरपश्चिम प्रदेश डाेटी जिल्ला पुर्विचाैकी गाउँपालिक वडा नं ४ सानागाउँ डाेटी",
        "province": 7
    },
    {
        "id": "-8f747C82L_0iIA3o1dAG",
        "name": "ARK FM",
        "streamUrl": "http://stream.zeno.fm/sxr8kkycjseuv",
        "frequency": null,
        "address": "Pokhara, Kaski",
        "province": 4
    },
    {
        "id": "JK_6d_HSKZAdMh2XZhRO4",
        "name": "Radio Bagmati",
        "streamUrl": "https://stream-42.zeno.fm/occ1fsmvdq0uv?zs=GC0HK9Y5QE-5wu_PVVgitw",
        "frequency": 107.4,
        "address": " Kakani, Nuwakot",
        "province": 3
    },
    {
        "id": "Wngcd1Y9pnt5Vri8qJPZX",
        "name": "Radio Attariya",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8150/radio.mp3",
        "frequency": 92.0,
        "address": "गोदावरी न पा २ अत्तरिया कैलाली ",
        "province": 7
    },
    {
        "id": "OaJ5da8rpi6ppi_xXVC1h",
        "name": "Gujaramai Fm 99.7",
        "streamUrl": "http://216.55.141.189:8082",
        "frequency": 99.7,
        "address": "Baudhimai-8 Sarmujwa Rautahat Nepal",
        "province": 2
    },
    {
        "id": "GGiy1O69rAzJUGCewVwmK",
        "name": "Nepal Network",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": null,
        "address": "Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "5l5MpWtw_8fXJh7zwApuC",
        "name": "Radio Rajapur",
        "streamUrl": "http://streaming.hamropatro.com:8132",
        "frequency": 88.6,
        "address": "Rajapur Municipality -04 Bardiya, Nepal",
        "province": 5
    },
    {
        "id": "BzyU5KI5u-hUkr-VPmb3B",
        "name": "Rastriya Sandesh",
        "streamUrl": "http://stream.zeno.fm/qe715t14gwzuv",
        "frequency": null,
        "address": "काठमाडौँ -३२, कोटेश्वोर, नेपाल",
        "province": 3
    },
    {
        "id": "PVQ-5CIeCVk9W9HvvZvxv",
        "name": "Bajjika FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8052/stream",
        "frequency": 99.4,
        "address": "Madhavnarayan Mun.- 6, Madhopur, Rautahat (Madhesh Pradesh)",
        "province": 2
    },
    {
        "id": "tPVh9rcGaaoBOlLm08fuc",
        "name": "Radio Baiteshwor",
        "streamUrl": "http://streaming.hamropatro.com:8531",
        "frequency": 94.5,
        "address": "Baiteshwor Gaupalika -5 Mainapokhari Dolakha",
        "province": 3
    },
    {
        "id": "nkq00ayLld3WgEPDd_ozC",
        "name": "Radio Janmabhumi",
        "streamUrl": "http://streaming.hamropatro.com:8170",
        "frequency": null,
        "address": "Runtigadhi 06 - Holeri Nepal",
        "province": 5
    },
    {
        "id": "h7_25zTBXa-1rY1oxqQgw",
        "name": "Radio Barsha",
        "streamUrl": "http://streaming.hamropatro.com:8557",
        "frequency": 91.1,
        "address": "Malangawa -09 - Sarlahi Nepal",
        "province": 2
    },
    {
        "id": "aqqrR1KeifsoDglFyYcoP",
        "name": "Radio Shreenagar FM",
        "streamUrl": "http://streaming.hamropatro.com:8599",
        "frequency": 102.0,
        "address": "Shreenagar Humla Nepal",
        "province": 6
    },
    {
        "id": "hgWcA0Ea6ltjAKaekYY2o",
        "name": "Kaligandaki FM (Gulmi)",
        "streamUrl": "http://streaming.hamropatro.com:8353",
        "frequency": 88.4,
        "address": "Kaligandaki 2 Gulmi",
        "province": 5
    },
    {
        "id": "5HXLuZqO_9ZI3cP0Olkur",
        "name": "Radio Sathi FM",
        "streamUrl": "https://live.itech.host:4180/stream",
        "frequency": 95.0,
        "address": "Rajapur, Municipality-4, Bardiya, Nepal",
        "province": 5
    },
    {
        "id": "WP9Xy7ITxgsl3MvILgczg",
        "name": "Galyang FM",
        "streamUrl": "https://live.itech.host:9107/stream",
        "frequency": 92.2,
        "address": "Galyang, Syangja, Gandaki Pradesh",
        "province": 4
    },
    {
        "id": "ytvquClSmQXa9TrbBc0oJ",
        "name": "Sambad FM",
        "streamUrl": "http://streaming.hamropatro.com:5509",
        "frequency": 98.3,
        "address": "Gulariya Municipality -04- Tulapur (Lakeside) Bardiya Nepal",
        "province": 5
    },
    {
        "id": "aPnWvHcRoAd0c4QjjOZQ7",
        "name": "Rajbanshi Online Radio",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8092/stream",
        "frequency": null,
        "address": "Biratnagar Nepal",
        "province": 1
    },
    {
        "id": "NFMVr2cFgKDe3pSoCUL5U",
        "name": "Radio Naya Nepal",
        "streamUrl": "http://streaming.hamropatro.com:8537",
        "frequency": 98.2,
        "address": "आठविसकोट–९, रुकुम (पश्चिम)",
        "province": 6
    },
    {
        "id": "YQX_TbXS7PiveAK2hY4tw",
        "name": "Suryamukhi FM",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8030/radio.mp3",
        "frequency": 88.8,
        "address": "Runtigadi 6 Holeri, Rolpa",
        "province": 5
    },
    {
        "id": "caxHLTxLTujT4aimcT4it",
        "name": "Online Radio Nabin Sanchar",
        "streamUrl": "http://streaming.hamropatro.com:8174",
        "frequency": null,
        "address": "Tribeni 4 Rolpa",
        "province": 5
    },
    {
        "id": "NCD5fVVx9QDQUtDt1to3N",
        "name": "Radio Pathsala Nepal",
        "streamUrl": "http://streaming.hamropatro.com:8677",
        "frequency": 104.0,
        "address": "Ghorahi -14 Dang Nepal",
        "province": 5
    },
    {
        "id": "iLtein0dz8vk594gLoWUi",
        "name": "Radio Sanjiwani FM",
        "streamUrl": "http://streaming.hamropatro.com:8252",
        "frequency": 91.0,
        "address": "Dang, Nepal",
        "province": 5
    },
    {
        "id": "pT6bZuOmjgO0-Jjs3JWAV",
        "name": "Radio Dibyabani",
        "streamUrl": "http://streaming.hamropatro.com:8563",
        "frequency": 101.5,
        "address": "Phidim - 2 Panchthar Nepal",
        "province": 1
    },
    {
        "id": "g1YFvS34ONe2d8lioyS7o",
        "name": "Radio Belaka FM",
        "streamUrl": "http://streaming.hamropatro.com:8695",
        "frequency": 100.9,
        "address": "Belka Municipality 9 Rampur, Udayapur Nepal",
        "province": 1
    },
    {
        "id": "qak65Vs0IWU9RA5WtZQPb",
        "name": "Shuklaphanta FM ",
        "streamUrl": "https://streaming.webhostnepal.com/8010/stream",
        "frequency": 99.4,
        "address": "Mahendranagar , Kanchanpur Nepal ",
        "province": 7
    },
    {
        "id": "3TvELuBI81yl3CCNMKRCY",
        "name": "Radio Purbanchal",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8114/stream",
        "frequency": 104.4,
        "address": "Morang Nepal",
        "province": 1
    },
    {
        "id": "quiOgP9JSKeDbxM05Vc-Z",
        "name": "Radio Sanskriti",
        "streamUrl": "http://streaming.hamropatro.com:8651",
        "frequency": 98.2,
        "address": "Gaur-3, Rautahat Nepal",
        "province": 2
    },
    {
        "id": "xwE1tzujLMSPBdYRBfl1e",
        "name": "Radio Bajhang",
        "streamUrl": "http://streaming.hamropatro.com:8691",
        "frequency": 91.0,
        "address": "Jayaprithvi municipality 10 , Chainpur Bajhang",
        "province": 7
    },
    {
        "id": "tJLvCWbLxfGSUEs_OiVuf",
        "name": "Saimon FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8122/stream",
        "frequency": 92.6,
        "address": "Udayapur Gaighat",
        "province": 1
    },
    {
        "id": "q6c0DDEeXJFD_R_Hzi899",
        "name": "Barahathawa FM",
        "streamUrl": "https://live.itech.host:1605/stream",
        "frequency": 101.1,
        "address": "Barahathawa -5,Sarlahi",
        "province": 2
    },
    {
        "id": "MmZqkU9kmVc80YBOL4ogD",
        "name": "Radio Sahayatri",
        "streamUrl": "https://live.itech.host:2390/stream",
        "frequency": 94.2,
        "address": "Siddicharan Municipality - 11, Ramailodada Okhaldhunga",
        "province": 1
    },
    {
        "id": "TCARlxK4XjtUkR61KoiDB",
        "name": "Radio Belauri",
        "streamUrl": "https://live.itech.host:9035/stream",
        "frequency": 105.0,
        "address": "Belauri - 06, Campus Road, Kanchanpur, Nepal",
        "province": 7
    },
    {
        "id": "gVy68mvHm84EPMQxKsyUr",
        "name": "Radio Ninglashaini FM",
        "streamUrl": "http://streaming.softnep.net:8179",
        "frequency": 94.0,
        "address": "Dashrathchand Municipality-1, Milan Chowk Baitadi",
        "province": 7
    },
    {
        "id": "s2EmUcWDk0Ob_1iyPdkV-",
        "name": "Radio Sudoorawaz",
        "streamUrl": "https://live.itech.host:8639/stream",
        "frequency": 95.0,
        "address": "Amargadhi - 5, BIddhut Road, Dadeldhura",
        "province": 7
    },
    {
        "id": "BSXvhBV8k3NxESzRg9qpr",
        "name": "Radio Unity",
        "streamUrl": "https://streaming.webhostnepal.com/8032/stream",
        "frequency": 92.2,
        "address": "अमरगढी नगरपालिका ०५- खलङ्गा, डडेल्धुरा  सुदूरपश्चिम प्रदेश, नेपाल",
        "province": 7
    },
    {
        "id": "pIinHTASVM2s0j_mZJA_C",
        "name": "Radio Syangja",
        "streamUrl": "https://live.itech.host:8891/stream",
        "frequency": 89.6,
        "address": "Putali Bazar -1, Syangja, Nepal",
        "province": 4
    },
    {
        "id": "3nWUaIxlOchENwVE73kmJ",
        "name": "Kathariya Online Radio",
        "streamUrl": "https://stream.zeno.fm/6fdk6gyrhm8uv",
        "frequency": null,
        "address": "Bardagoriya Rural Municipality-6, Kotatulsipur Kailali, Sudurpashchim",
        "province": 7
    },
    {
        "id": "P1Yq3d9f-eFqnjfB7UN5I",
        "name": "Radio Kapilvastu",
        "streamUrl": "http://streaming.hamropatro.com:8108",
        "frequency": 104.2,
        "address": "Budhabhumi Municipality 10 , Kapilvastu",
        "province": 5
    },
    {
        "id": "ZgJsIC-V_dlLGIywORE5u",
        "name": "Naya Aasha FM",
        "streamUrl": "http://streaming.hamropatro.com:5513",
        "frequency": 89.3,
        "address": "Janakpur-14, Madhesh Province",
        "province": 2
    },
    {
        "id": "REvHgu6KrhR6oCgrt0R6k",
        "name": "Dolpa FM",
        "streamUrl": "https://live.itech.host:8337/stream",
        "frequency": 101.4,
        "address": "Thulibheri Municiplity 3 Dunai, Dolpa",
        "province": 6
    },
    {
        "id": "Uoc79_xg2JQmwiDlkd7q-",
        "name": "Radio Janakpur",
        "streamUrl": "http://216.55.141.189:9380",
        "frequency": null,
        "address": null
    },
    {
        "id": "aEF2s28I2YPA30TNUi17N",
        "name": "Dudhmati FM",
        "streamUrl": "http://streaming.hamropatro.com:8038",
        "frequency": 104.0,
        "address": "Kshireshwarnath Mun-5, Mahendranagar, Dhanusha",
        "province": 2
    },
    {
        "id": "PgOfsle3RVV4YiUmEP9LP",
        "name": "Radio Shweta Shardul",
        "streamUrl": "https://live.itech.host:1210/stream",
        "frequency": 93.6,
        "address": "New Baneshwor, Kathmandu, Nepal",
        "province": 3
    },
    {
        "id": "koAy4GKaPwgoYNKecJ-Tc",
        "name": "Unique FM",
        "streamUrl": "http://streaming.hamropatro.com:8270",
        "frequency": 90.0,
        "address": "Gajuri -1 Gajuribazar Dhadhing",
        "province": 3
    },
    {
        "id": "BJIVlBx77OHSlycJjU8fy",
        "name": "Radio Tila Aawaj",
        "streamUrl": "https://stream.zeno.fm/yowpdmuxurrvv",
        "frequency": 106.7,
        "address": "Khandachakra Municipality -03 Tadi Kalikot",
        "province": 6
    },
    {
        "id": "aRYDKNk6vuypgVkJNduOO",
        "name": "BP Bichar Radio",
        "streamUrl": "https://radio-streaming-serv.hamropatro.com:8140/radio.mp3",
        "frequency": null,
        "address": "BP Bichar Network Banshidhar Marg, Chandol Kathmandu-4, Bagmati",
        "province": 3
    },
    {
        "id": "cCluCbEnNG6IlC84fUBEL",
        "name": "Radio Mirmire",
        "streamUrl": "http://streaming.hamropatro.com:8232",
        "frequency": 89.4,
        "address": "Anamnagar, Kathmandu Nepal",
        "province": 3
    },
    {
        "id": "o81pljI1gZp3vgwb7U7eS",
        "name": "Myagdikali FM 88.2 Mhz",
        "streamUrl": "http://streaming.hamropatro.com:8539",
        "frequency": 88.2,
        "address": "Beni Nagarpalika 07- Myagdi, Nepal",
        "province": 4
    },
    {
        "id": "Vzq7ySvuvs3zqvcIAhREU",
        "name": "Radio Matribhumi",
        "streamUrl": "http://streaming.hamropatro.com:8811",
        "frequency": 96.5,
        "address": "Narayan Municipality-06,Janakchowk Dailekha",
        "province": 6
    },
    {
        "id": "0ZbpvB4iEi0ugic9O7Q23",
        "name": "Radio Sambriddhi",
        "streamUrl": "http://streaming.hamropatro.com:8715",
        "frequency": 98.1,
        "address": "Resunga Municipality -1 Tamghas Gulmi.",
        "province": 5
    },
    {
        "id": "zVrbh18N5qe5vYbKurWZF",
        "name": "Radio Sunchhahari",
        "streamUrl": "http://streaming.hamropatro.com:5519",
        "frequency": 101.5,
        "address": "Sakhi-2, Holeri, Rolpa",
        "province": 5
    },
    {
        "id": "UV02W0PCfqGQ3nNDAcd1f",
        "name": "Radio Satyabani",
        "streamUrl": "http://streaming.hamropatro.com:8881",
        "frequency": 104.0,
        "address": "Parwat Nepal",
        "province": 4
    },
    {
        "id": "nau2Ldt_XzAnIevhLeTjQ",
        "name": "Radio Dhanushadham",
        "streamUrl": "http://streaming.hamropatro.com:8028",
        "frequency": 107.3,
        "address": "Dhanusadham Muncipality 3, Dhanushadham",
        "province": 2
    },
    {
        "id": "QX4Z8Pn_QMUaW6HaN_b0-",
        "name": "Kingdom Voice FM",
        "streamUrl": "https://live.itech.host:1380/stream",
        "frequency": 102.1,
        "address": "Lalitpur Metropolitan City Ward No.14 Lalitpur",
        "province": 3
    },
    {
        "id": "n3GZpSowSOrHbYjedvV6h",
        "name": "Radio Sitganga",
        "streamUrl": "http://streaming.hamropatro.com:8867",
        "frequency": 107.9,
        "address": "शितगंगा नगरपालिका ३ अर्घाखाँची",
        "province": 5
    },
    {
        "id": "ue6A2vIMMC5vZtkVkgTli",
        "name": "Radio Indreni",
        "streamUrl": "http://streaming.hamropatro.com:8519",
        "frequency": null,
        "address": "Kathmandu Nepal",
        "province": 3
    },
    {
        "id": "N3rBrzu2z5FDbqae3g6DL",
        "name": "Popular FM 99.5",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8024/stream",
        "frequency": 99.5,
        "address": "इनरुवा - २ जि.वि.स.रोड, सुनसरी",
        "province": 1
    },
    {
        "id": "7G3WqLsLzMM0_A1TSjXtV",
        "name": "Samad FM",
        "streamUrl": "http://streaming.hamropatro.com:8008",
        "frequency": 102.6,
        "address": "Siraha, Lahan",
        "province": 2
    },
    {
        "id": "oaiHObW1Q6xUtkr4cZHLW",
        "name": "Radio Jhurjhure",
        "streamUrl": "http://216.55.141.189:1084",
        "frequency": 90.6,
        "address": "Bagmati Rural Municipality - 04",
        "province": 3
    },
    {
        "id": "LycKMEx9RlTeWrVqKDtqh",
        "name": "Radio Nayan",
        "streamUrl": "http://streaming.softnep.net:8331/",
        "frequency": null,
        "address": "Tulsipur SMP-5 Dang",
        "province": 5
    },
    {
        "id": "O1N91AIk4q0m29tcl06du",
        "name": "Tamakoshi FM",
        "streamUrl": "https://stream.hamropatro.com/4141",
        "frequency": 95.0,
        "address": "Tamakoshi 4 Malu Dolakha",
        "province": 3
    },
    {
        "id": "Y-JnQff1CEzNXU9C0Jznx",
        "name": "Radio Juntara",
        "streamUrl": "http://streaming.hamropatro.com:8791",
        "frequency": 103.4,
        "address": "Gaushala -05, Mahottari Nepal",
        "province": 2
    },
    {
        "id": "dP-HHwOGYvhDAngtB0GrU",
        "name": "Radio Paschimanchal FM",
        "streamUrl": "http://streaming.hamropatro.com:8729",
        "frequency": 99.4,
        "address": "Tinahu Rural Municipality-03,Gada Dovan Palpa",
        "province": 5
    },
    {
        "id": "QXDGRIOzV0CHxuRRn4a-r",
        "name": "Maulapur FM",
        "streamUrl": "http://streaming.hamropatro.com:8220",
        "frequency": 100.7,
        "address": "Maulapur Municipality - 5, Maulapur Rautahat",
        "province": 2
    },
    {
        "id": "yv-5--fc5kpNG2p_gvJ1M",
        "name": "Radio Sangeet",
        "streamUrl": "http://streaming.softnep.net:8047",
        "frequency": 92.4,
        "address": "Amarpath, Butwal",
        "province": 5
    },
    {
        "id": "Gje5KHwtASuzWKp4_5ijP",
        "name": "Radio Khalanga",
        "streamUrl": "https://live.itech.host:8314/stream",
        "frequency": 107.6,
        "address": "Bheri Nagarpalika- 3, Jajarkot",
        "province": 6
    },
    {
        "id": "SjlzG__PXI-fROCSqnjA2",
        "name": "Radio King Fm",
        "streamUrl": "http://streaming.hamropatro.com:8625",
        "frequency": 104.1,
        "address": "Damak, Jhapa",
        "province": 1
    },
    {
        "id": "BFptsRP_1MeH0Io9q3Fqg",
        "name": "Helambu FM",
        "streamUrl": "https://live.itech.host:8015/stream",
        "frequency": 89.6,
        "address": "Sindhupalchok Nepal",
        "province": 3
    },
    {
        "id": "_ucAyuqeAamGMrFqJ1Gaa",
        "name": "Radio Lokpriya Netrajyoti",
        "streamUrl": "https://streaming.softnep.net:10884/;stream.nsv&type=mp3&volume=50",
        "frequency": 106.6,
        "address": " Barhabise, Sindhupalchok",
        "province": 3
    },
    {
        "id": "wCpPg3O5YSg1i02sAf5Qh",
        "name": "Radio Sajha Online",
        "streamUrl": "http://streaming.hamropatro.com:8837",
        "frequency": null,
        "address": "Runtigadhi 7 Rolpa",
        "province": 5
    },
    {
        "id": "h89ucSJ51sLwYROUkPoq2",
        "name": "Dhurbatara FM",
        "streamUrl": "https://live.itech.host:8839/stream",
        "frequency": 89.8,
        "address": "Narayan Nagarpalika 1 Dailekh Nepal",
        "province": 6
    },
    {
        "id": "FO1zXnhE-cQuVrczlGPgF",
        "name": "Radio Kailali",
        "streamUrl": "http://streaming.softnep.net:8267",
        "frequency": 103.7,
        "address": " Sukhad, Kailali,",
        "province": 7
    },
    {
        "id": "J4xDqltsgqyd6wrcWq3HQ",
        "name": "Kirat Awaj",
        "streamUrl": "http://stream.zeno.fm/cvmbonh20ymtv",
        "frequency": null,
        "address": "Mangsebung 3,ilam, Nepal",
        "province": 1
    },
    {
        "id": "R_AmT0HVUmvY012N1PXuZ",
        "name": "Kiss FM",
        "streamUrl": "http://streaming.hamropatro.com:8649",
        "frequency": 89.3,
        "address": "Sainamaina-3, Rupandehi",
        "province": 5
    },
    {
        "id": "PycrYWOzBC8m89l8spSoH",
        "name": "Radio Pokhariya",
        "streamUrl": "http://streaming.hamropatro.com:8333",
        "frequency": 105.8,
        "address": "Pokhariya 4, Parsa",
        "province": 2
    },
    {
        "id": "PqDS3A1ydg5AHBRUjf5NR",
        "name": "Radio Prithivi FM",
        "streamUrl": "https://live.itech.host:2145/stream",
        "frequency": 102.2,
        "address": " Kushe Rural Municipality , Jajarkot, Nepal",
        "province": 6
    },
    {
        "id": "ugVeNEKN80cf7U82O-z8O",
        "name": "Radio Narayani (Online)",
        "streamUrl": "http://streaming.hamropatro.com:8863",
        "frequency": null,
        "address": "Ratnanagar Municipality 9, Mohana, Chitwan",
        "province": 3
    },
    {
        "id": "M6DUc6GGXJObASRY-Q4uE",
        "name": "Mudkechula FM",
        "streamUrl": "http://streaming.hamropatro.com:8875",
        "frequency": 93.5,
        "address": "Mudkechula gaunpalika Dolpa, Nepal",
        "province": 6
    },
    {
        "id": "eNkelk3OF7KTr5ydmvxF1",
        "name": "Radio Terai",
        "streamUrl": "https://live.itech.host:4905/stream",
        "frequency": 107.0,
        "address": "Ranighat-12, Birgunj Parsa",
        "province": 2
    },
    {
        "id": "JooWre2-6RTTNNnMrZxGF",
        "name": "Radio Samabeshi Aawaj",
        "streamUrl": "https://online.net.np/8004/stream",
        "frequency": 102.0,
        "address": "Triveni Rural Municipality 06, Jhulneta, Rukum West",
        "province": 5
    },
    {
        "id": "GlF99z6RxTkoDzpGBW4cZ",
        "name": "Radio Menchhyayem",
        "streamUrl": "http://streaming.hamropatro.com:8411",
        "frequency": 103.4,
        "address": "Myanglung Terhathum",
        "province": 1
    },
    {
        "id": "QXf7riMAXbpowMJdnArJy",
        "name": "Radio Madhyapahad",
        "streamUrl": "http://streaming.hamropatro.com:8815",
        "frequency": 88.2,
        "address": "Bagchaur Municipality, Salyan",
        "province": 6
    },
    {
        "id": "Jxp88fLWlcqCsRipHfFkd",
        "name": "Radio Jugar FM",
        "streamUrl": "http://streaming.hamropatro.com:8003/stream",
        "frequency": null,
        "address": "Tribeni Rural Municipality 05, Rolpa",
        "province": 5
    },
    {
        "id": "ipnOghfuKuex6yaUhcN6J",
        "name": "Radio Saligram",
        "streamUrl": "http://streaming.hamropatro.com:8254",
        "frequency": 100.6,
        "address": "Kushma, Municipality 12 Parbat",
        "province": 4
    },
    {
        "id": "aGeoKzfhmegR2_XCKOKpH",
        "name": "Radio Palung",
        "streamUrl": "http://streaming.hamropatro.com:8084",
        "frequency": 107.2,
        "address": "Thaha Municipality-02, Makawanpur",
        "province": 3
    },
    {
        "id": "CwR7fkeIkowVn-5_NON1H",
        "name": "Radio Chaurjahari",
        "streamUrl": "http://streaming.hamropatro.com:8483",
        "frequency": 94.8,
        "address": "Chaurjahari Municipality,04- Rukum West",
        "province": 5
    },
    {
        "id": "48JNGy16D7tbbBQlBDthE",
        "name": "Radio Sunaulo FM",
        "streamUrl": "http://streaming.hamropatro.com:8034",
        "frequency": 105.6,
        "address": "Main Road Masuriya ,Kailali",
        "province": 7
    },
    {
        "id": "J6S85tHCz-pgnxVDad-O1",
        "name": "Radio Dhorbarahi",
        "streamUrl": "https://live.itech.host:9496/stream",
        "frequency": 103.8,
        "address": "Shuklagandaki-4, Dulegaunda, Tanahun",
        "province": 4
    },
    {
        "id": "Rn8ksC083reSjaZ85zOmV",
        "name": "Pathibhara FM",
        "streamUrl": "https://live.itech.host:8749/stream",
        "frequency": 93.6,
        "address": "Beldagi Road, Damak Mall, Top floor, Damak-6, Jhapa,",
        "province": 1
    },
    {
        "id": "rMVQ3bAfWWkFA4GsUrteR",
        "name": "Radio Surkhet",
        "streamUrl": "https://live.itech.host:3830/stream",
        "frequency": 90.2,
        "address": " Birendranagar - Surkhet",
        "province": 6
    },
    {
        "id": "8UdOMoA2eudMk2zvahs6_",
        "name": "Chitwan Online FM",
        "streamUrl": "https://26383.live.streamtheworld.com/SAM04AAC227_SC",
        "frequency": null,
        "address": "24 Hours Nonstop Music Chitwan,Nepal",
        "province": 3
    },
    {
        "id": "O9uokjtG0Jyhsr8lNBgL5",
        "name": "Radio Tikapur",
        "streamUrl": "https://live.itech.host:9519/live",
        "frequency": 101.0,
        "address": "Tikapur Municipality 01, Sanchargram Tikapur, Kailali Tel",
        "province": 7
    },
    {
        "id": "Olh3MTnlTvIrXHDZSymJN",
        "name": "Radio Salhesh",
        "streamUrl": "http://streaming.hamropatro.com:8809",
        "frequency": 88.8,
        "address": "Siraha Municipality-11- Siraha,Nepal",
        "province": 2
    },
    {
        "id": "74_JWQ8YLDWm0e_NZ8wVh",
        "name": "Bishwas FM",
        "streamUrl": "https://stream-150.zeno.fm/t7d0knup6x8uv",
        "frequency": 93.6,
        "address": "Kalaiya, Bara",
        "province": 2
    },
    {
        "id": "lcMcoLoxBv-c9zzQFlSgh",
        "name": "Radio Lakecity",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8022/stream",
        "frequency": 96.2,
        "address": "Lekhnath Pokhara",
        "province": 4
    },
    {
        "id": "ycVocgvFVzszRVZEX6ehg",
        "name": "Websoft IT Nepal Online Radio",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8002/stream",
        "frequency": null,
        "address": "Websoft IT Nepal Pvt. Ltd. Biratnagar, Morang Nepal",
        "province": 1
    },
    {
        "id": "yzou5Mq9x__qckhsZYmp1",
        "name": "Radio Sannitriveni",
        "streamUrl": "http://streaming.hamropatro.com:8058",
        "frequency": 97.1,
        "address": "Sannitriveni Rural Municipality,Kalikot Nepal",
        "province": 6
    },
    {
        "id": "JBhiyrEsh0XkCQ9GvZKwQ",
        "name": "Radio Paschim Pokhara",
        "streamUrl": "http://streaming.hamropatro.com:8012",
        "frequency": 107.9,
        "address": "Pokhara 25/14 Kaski Nepal",
        "province": 4
    },
    {
        "id": "_OuDbnz-bS69RibBvo2Lt",
        "name": "Radio Olive Nepal",
        "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_OLIVE_HITS_S02AAC.aac",
        "frequency": null,
        "address": "Al Safiliya Street, Doha, Qatar"
    },
    {
        "id": "qkBmY9YxyVp-lOu6NWo6M",
        "name": "C FM",
        "streamUrl": "https://live.itech.host:8391/live",
        "frequency": 94.7,
        "address": " Rajbiraj- Shantinagar-06, Saptari",
        "province": 2
    },
    {
        "id": "Odg6CAho0lI2UAmJp7L8A",
        "name": "Manakamana FM",
        "streamUrl": "http://streaming.hamropatro.com:8200",
        "frequency": 98.7,
        "address": "Gorkha, Manakamana",
        "province": 4
    },
    {
        "id": "K-A-SIJv3jAn-KNG_4XkX",
        "name": "Radio Today",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 91.0,
        "address": "Dhanusa, Nepal",
        "province": 2
    },
    {
        "id": "dlWfJsuBMKQpOrcxtuq_q",
        "name": "Radio Apostle",
        "streamUrl": "https://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 102.6,
        "address": " Bagar-1, Pokhara, Nepal",
        "province": 4
    },
    {
        "id": "LP2rbhf5RYic6dbG8iyU_",
        "name": "Radio Panchadewal",
        "streamUrl": "http://streaming.hamropatro.com:8511",
        "frequency": 88.6,
        "address": "Binayak, Achham",
        "province": 7
    },
    {
        "id": "Fe8u31fW9nxvyCnL-VcK9",
        "name": "Radio Jaleshwarnath",
        "streamUrl": "http://streaming.hamropatro.com:8647",
        "frequency": 90.4,
        "address": "Jaleshwar, Mahotthari Nepal",
        "province": 2
    },
    {
        "id": "ZBBflfLOUA7c081JKb0p5",
        "name": "Chhathar Fm",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 95.3,
        "address": "Chhathar municipality-2, Sukrabare, Terhathum",
        "province": 1
    },
    {
        "id": "7oSMApScGgmJCd9TcCxN3",
        "name": "Geruwa FM",
        "streamUrl": "http://streaming.hamropatro.com:8315",
        "frequency": 90.7,
        "address": "Geruwa Rural-Municipality-3, ShantiBazar, Bardiya",
        "province": 5
    },
    {
        "id": "8LPb32QibqNZe41C-toKy",
        "name": "Radio Nalagad",
        "streamUrl": "http://streaming.hamropatro.com:9001",
        "frequency": 96.9,
        "address": "Nalagaad Municipality,04- Jajarkot Nepal ",
        "province": 6
    },
    {
        "id": "nP-Sb2df8R3gRXwirfreM",
        "name": "Radio Shubhakalika FM",
        "streamUrl": "http://streaming.hamropatro.com:8100",
        "frequency": 99.1,
        "address": "Shubhakalika rural municipality 05, Kalikot ",
        "province": 6
    },
    {
        "id": "4oMo8EfT66mSEBi0Dxey1",
        "name": "Radio Bhotewodar",
        "streamUrl": "http://streaming.hamropatro.com:8381",
        "frequency": 90.8,
        "address": "Sundarbajar Municipality -09, Lamjung Nepal",
        "province": 4
    },
    {
        "id": "TyXGtIyra9HsfKD_067SF",
        "name": "Radio Gaurab",
        "streamUrl": "https://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 97.0,
        "address": "Dhulikhel",
        "province": 3
    },
    {
        "id": "hPkOG6mpUuh6Ure3w8AjH",
        "name": "Radio Shepherd (Dhulikhel)",
        "streamUrl": "http://centova1.toofancom.com:5128",
        "frequency": 89.2,
        "address": "Dhulikhel, Kavre",
        "province": 3
    },
    {
        "id": "7KbvuiYJ2Voqw5Fqp4fAO",
        "name": "Indreni FM",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 97.6,
        "address": "Birgunj-14, Shreepur, Parsa, Birgunj",
        "province": 2
    },
    {
        "id": "bM2DyLAphlGaZNbDd4So4",
        "name": "Radio Swagatam",
        "streamUrl": "http://streaming.hamropatro.com:8118",
        "frequency": 89.0,
        "address": "Mithila Municipality -06,Dhalkebar,Dhanusha Nepal ",
        "province": 2
    },
    {
        "id": "FQjdoJe0IBVT6DvukU4rC",
        "name": "Radio Dhalkebar",
        "streamUrl": "http://streaming.hamropatro.com:8126",
        "frequency": 91.3,
        "address": "Mithila Municipality -06,Dhalkebar,Dhanusha Nepal",
        "province": 2
    },
    {
        "id": "mBAG2xO64BuHLt0gL9Kb2",
        "name": "Syangja Radio",
        "streamUrl": "https://stream-151.zeno.fm/bx7t5muk8k8uv?zs",
        "frequency": null,
        "address": "Putalibazar Syangja, Nepal",
        "province": 4
    },
    {
        "id": "wrlzl6aPAGcWw-6EIPSds",
        "name": "Panchase FM",
        "streamUrl": "http://streaming.hamropatro.com:8825",
        "frequency": 102.8,
        "address": "Kusma ,Parbat Nepal",
        "province": 4
    },
    {
        "id": "IZUEq6tWVVEoeRqzzP8le",
        "name": "Red FM",
        "streamUrl": "https://onlineradio.websoftitnepal.com/8074/stream",
        "frequency": 101.0,
        "address": "Rangeli Road Biratnagar, Morang Nepal",
        "province": 1
    },
    {
        "id": "xuuujFMIs0oV7jQC1S6C-",
        "name": "Radio Bhojpur FM",
        "streamUrl": "http://live.itechnepal.com:9078/stream",
        "frequency": 93.8,
        "address": "Bhojpur, Nepal",
        "province": 1
    },
    {
        "id": "RW81oBDpCe31x9l8XkIpc",
        "name": "Radio Birat",
        "streamUrl": "https://live.itech.host:9173/stream",
        "frequency": 88.5,
        "address": "Birtamod Jhapa",
        "province": 1
    },
    {
        "id": "M8F7CPuGv8FHknkvwfBTL",
        "name": "Radio Saugat",
        "streamUrl": "http://stream.zeno.fm/nsxexttokuhvv",
        "frequency": 88.1,
        "address": "Siraha, Lahan",
        "province": 2
    },
    {
        "id": "8YbO8BIvqvTHqJObncO5G",
        "name": "Radio Janani",
        "streamUrl": "https://live.itech.host:8773/stream",
        "frequency": 90.6,
        "address": "Sirjana Chowk - 8, Pokhara",
        "province": 4
    },
    {
        "id": "A0FGcS8y5AF4RZGuocqIb",
        "name": "Radio KMC",
        "streamUrl": "https://streaming.webhostnepal.com/8024/stream",
        "frequency": 104.6,
        "address": "Dhangadhi Sub -metropolitan, 06 Kailali",
        "province": 7
    },
    {
        "id": "YykERnzIjms97wZpM9pSc",
        "name": "Radio Sainamaina",
        "streamUrl": "http://streaming.hamropatro.com:8030",
        "frequency": 91.0,
        "address": "Sainamaina-8, Colouny. Rupandehi",
        "province": 5
    },
    {
        "id": "zapJcMth8XWVkQ0GX25ZG",
        "name": "Radio Malashree",
        "streamUrl": "https://stream.zeno.fm/fjdb83oq3e0uv",
        "frequency": 100.5,
        "address": "Liwang-6, Rolpa",
        "province": 5
    },
    {
        "id": "TYFWMXhoznA7MEK1zCAMN",
        "name": "Radio Panini FM",
        "streamUrl": "http://streaming.hamropatro.com:5505",
        "frequency": 99.1,
        "address": "Panini Rural Municipality -03, Durgafant Media Chowk, Arghakhachi Nepal",
        "province": 5
    },
    {
        "id": "-HpAXANko-SsJj622MIxQ",
        "name": "Radio Api FM",
        "streamUrl": "http://streaming.hamropatro.com:5503",
        "frequency": 88.0,
        "address": "Budhinanda municipality 01- Kolti, Bajura Nepal",
        "province": 7
    },
    {
        "id": "yw8KZkiWZZCVNe_XM9uby",
        "name": "Radio Lokdarpan",
        "streamUrl": "https://streaming.webhostnepal.com/8036/stream",
        "frequency": 94.6,
        "address": "Chaupata-5, Lekam Rural Municipality Darchula",
        "province": 7
    },
    {
        "id": "Yr6Gh85ayyU08ozxP__qh",
        "name": "Radio Smart",
        "streamUrl": "http://streaming.hamropatro.com:5517",
        "frequency": 107.8,
        "address": "Barahathawa Municipality -5, Barahathawa Sarlahi",
        "province": 2
    },
    {
        "id": "wE8IDq_Wj107T_378raMV",
        "name": "Radio Kolhabi",
        "streamUrl": "http://streaming.hamropatro.com:5521",
        "frequency": 104.1,
        "address": "Kolhabi-1, Bara",
        "province": 2
    },
    {
        "id": "G8oyahn4QBy0h1yme-tJ6",
        "name": "Radio Everest",
        "streamUrl": "https://centova1.toofancom.com/proxy/radioeverest?mp=/stream",
        "frequency": 96.8,
        "address": "Solududhkunda-05, Salleri, Solukhumbu, Nepal",
        "province": 1
    },
    {
        "id": "eTiGY_MJzv_Iq9tQr3owD",
        "name": "Radio Ghodaghodi FM",
        "streamUrl": "http://streaming.hamropatro.com:5523",
        "frequency": 88.3,
        "address": "Ghodaghodi Municipality-1 Sukhad Kailali",
        "province": 7
    },
    {
        "id": "Lyry5_Sps-dc3btVipwbi",
        "name": "Shikhar FM",
        "streamUrl": "http://streaming.hamropatro.com:5525",
        "frequency": 102.7,
        "address": "Changunarayan 08, Bhaktapur",
        "province": 3
    },
    {
        "id": "Wi8MmoX7_WEx88Aixqlec",
        "name": "Swargadwari Online Radio",
        "streamUrl": "http://streaming.hamropatro.com:5529",
        "frequency": null,
        "address": "Pyuthan",
        "province": 5
    },
    {
        "id": "021iMOPKPeyLvEBJi2_1k",
        "name": "Radio Bhiswa FM",
        "streamUrl": "http://streaming.hamropatro.com:5527",
        "frequency": 107.6,
        "address": "Chhipaharmaigaupalika-5 Parsa Nepal",
        "province": 2
    },
    {
        "id": "HJwgH3AmZewYH8LG-5EtJ",
        "name": "Krishi Radio",
        "streamUrl": "https://streaming.softnep.net:10850/;stream.nsv&type=mp3&volume=70",
        "frequency": 101.5,
        "address": "Dhunibeshi 6, Dhading",
        "province": 3
    }
]