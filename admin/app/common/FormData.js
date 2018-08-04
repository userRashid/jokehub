(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('FormData', _FormData);

    _FormData.$inject = ['CategoryService', '$q'];

    function _FormData(CategoryService, $q) {
        return {
            getForm: _getForm
        }

        function categoryData() {
            var _d = $q.defer();
            CategoryService.getAllCategory().then(function (_response) {
                var _temp = [];
                var categories = _.filter(_response.data, function (category) {
                    return category.isActive !== '0';
                });
                categories.forEach(item => {
                    var _obj = {};
                    _obj.key = item.id;
                    _obj.value = item.name;
                    _temp.push(_obj);
                });
                _d.resolve(_temp);
            });
            return _d.promise;
        }

        function countryData() {

            var countries = [
                {
                    "countryCode": "AF",
                    "countryName": "Afghanistan"
                }, {

                    "countryCode": "AL",
                    "countryName": "Albania"
                }, {

                    "countryCode": "DZ",
                    "countryName": "Algeria"
                }, {

                    "countryCode": "AS",
                    "countryName": "American Samoa"
                }, {

                    "countryCode": "AD",
                    "countryName": "Andorra"
                }, {

                    "countryCode": "AO",
                    "countryName": "Angola"
                }, {

                    "countryCode": "AI",
                    "countryName": "Anguilla"
                }, {

                    "countryCode": "AQ",
                    "countryName": "Antarctica"
                }, {

                    "countryCode": "AG",
                    "countryName": "Antigua and Barbuda"
                }, {

                    "countryCode": "AR",
                    "countryName": "Argentina"
                }, {

                    "countryCode": "AM",
                    "countryName": "Armenia"
                }, {

                    "countryCode": "AW",
                    "countryName": "Aruba"
                }, {

                    "countryCode": "AU",
                    "countryName": "Australia"
                }, {

                    "countryCode": "AT",
                    "countryName": "Austria"
                }, {

                    "countryCode": "AZ",
                    "countryName": "Azerbaijan"
                }, {

                    "countryCode": "BS",
                    "countryName": "Bahamas"
                }, {

                    "countryCode": "BH",
                    "countryName": "Bahrain"
                }, {

                    "countryCode": "BD",
                    "countryName": "Bangladesh"
                }, {

                    "countryCode": "BB",
                    "countryName": "Barbados"
                }, {

                    "countryCode": "BY",
                    "countryName": "Belarus"
                }, {

                    "countryCode": "BE",
                    "countryName": "Belgium"
                }, {

                    "countryCode": "BZ",
                    "countryName": "Belize"
                }, {

                    "countryCode": "BJ",
                    "countryName": "Benin"
                }, {

                    "countryCode": "BM",
                    "countryName": "Bermuda"
                }, {

                    "countryCode": "BT",
                    "countryName": "Bhutan"
                }, {

                    "countryCode": "BO",
                    "countryName": "Bolivia"
                }, {

                    "countryCode": "BQ",
                    "countryName": "Bonaire"
                }, {

                    "countryCode": "BA",
                    "countryName": "Bosnia and Herzegovina"
                }, {

                    "countryCode": "BW",
                    "countryName": "Botswana"
                }, {

                    "countryCode": "BV",
                    "countryName": "Bouvet Island"
                }, {

                    "countryCode": "BR",
                    "countryName": "Brazil"
                }, {

                    "countryCode": "IO",
                    "countryName": "British Indian Ocean Territory"
                }, {

                    "countryCode": "VG",
                    "countryName": "British Virgin Islands"
                }, {

                    "countryCode": "BN",
                    "countryName": "Brunei"
                }, {

                    "countryCode": "BG",
                    "countryName": "Bulgaria"
                }, {

                    "countryCode": "BF",
                    "countryName": "Burkina Faso"
                }, {

                    "countryCode": "BI",
                    "countryName": "Burundi"
                }, {

                    "countryCode": "KH",
                    "countryName": "Cambodia"
                }, {

                    "countryCode": "CM",
                    "countryName": "Cameroon"
                }, {

                    "countryCode": "CA",
                    "countryName": "Canada"
                }, {

                    "countryCode": "CV",
                    "countryName": "Cape Verde"
                }, {

                    "countryCode": "KY",
                    "countryName": "Cayman Islands"
                }, {

                    "countryCode": "CF",
                    "countryName": "Central African Republic"
                }, {

                    "countryCode": "TD",
                    "countryName": "Chad"
                }, {

                    "countryCode": "CL",
                    "countryName": "Chile"
                }, {

                    "countryCode": "CN",
                    "countryName": "China"
                }, {

                    "countryCode": "CX",
                    "countryName": "Christmas Island"
                }, {

                    "countryCode": "CC",
                    "countryName": "Cocos [Keeling] Islands"
                }, {

                    "countryCode": "CO",
                    "countryName": "Colombia"
                }, {

                    "countryCode": "KM",
                    "countryName": "Comoros"
                }, {

                    "countryCode": "CK",
                    "countryName": "Cook Islands"
                }, {

                    "countryCode": "CR",
                    "countryName": "Costa Rica"
                }, {

                    "countryCode": "HR",
                    "countryName": "Croatia"
                }, {

                    "countryCode": "CU",
                    "countryName": "Cuba"
                }, {

                    "countryCode": "CW",
                    "countryName": "Curacao"
                }, {

                    "countryCode": "CY",
                    "countryName": "Cyprus"
                }, {

                    "countryCode": "CZ",
                    "countryName": "Czechia"
                }, {

                    "countryCode": "CD",
                    "countryName": "Democratic Republic of the Congo"
                }, {

                    "countryCode": "DK",
                    "countryName": "Denmark"
                }, {

                    "countryCode": "DJ",
                    "countryName": "Djibouti"
                }, {

                    "countryCode": "DM",
                    "countryName": "Dominica"
                }, {

                    "countryCode": "DO",
                    "countryName": "Dominican Republic"
                }, {

                    "countryCode": "TL",
                    "countryName": "East Timor"
                }, {

                    "countryCode": "EC",
                    "countryName": "Ecuador"
                }, {

                    "countryCode": "EG",
                    "countryName": "Egypt"
                }, {

                    "countryCode": "SV",
                    "countryName": "El Salvador"
                }, {

                    "countryCode": "GQ",
                    "countryName": "Equatorial Guinea"
                }, {

                    "countryCode": "ER",
                    "countryName": "Eritrea"
                }, {

                    "countryCode": "EE",
                    "countryName": "Estonia"
                }, {

                    "countryCode": "ET",
                    "countryName": "Ethiopia"
                }, {

                    "countryCode": "FK",
                    "countryName": "Falkland Islands"
                }, {

                    "countryCode": "FO",
                    "countryName": "Faroe Islands"
                }, {

                    "countryCode": "FJ",
                    "countryName": "Fiji"
                }, {

                    "countryCode": "FI",
                    "countryName": "Finland"
                }, {

                    "countryCode": "FR",
                    "countryName": "France"
                }, {

                    "countryCode": "GF",
                    "countryName": "French Guiana"
                }, {

                    "countryCode": "PF",
                    "countryName": "French Polynesia"
                }, {

                    "countryCode": "TF",
                    "countryName": "French Southern Territories"
                }, {

                    "countryCode": "GA",
                    "countryName": "Gabon"
                }, {

                    "countryCode": "GM",
                    "countryName": "Gambia"
                }, {

                    "countryCode": "GE",
                    "countryName": "Georgia"
                }, {

                    "countryCode": "DE",
                    "countryName": "Germany"
                }, {

                    "countryCode": "GH",
                    "countryName": "Ghana"
                }, {

                    "countryCode": "GI",
                    "countryName": "Gibraltar"
                }, {

                    "countryCode": "GR",
                    "countryName": "Greece"
                }, {

                    "countryCode": "GL",
                    "countryName": "Greenland"
                }, {

                    "countryCode": "GD",
                    "countryName": "Grenada"
                }, {

                    "countryCode": "GP",
                    "countryName": "Guadeloupe"
                }, {

                    "countryCode": "GU",
                    "countryName": "Guam"
                }, {

                    "countryCode": "GT",
                    "countryName": "Guatemala"
                }, {

                    "countryCode": "GG",
                    "countryName": "Guernsey"
                }, {

                    "countryCode": "GN",
                    "countryName": "Guinea"
                }, {

                    "countryCode": "GW",
                    "countryName": "Guinea-Bissau"
                }, {

                    "countryCode": "GY",
                    "countryName": "Guyana"
                }, {

                    "countryCode": "HT",
                    "countryName": "Haiti"
                }, {

                    "countryCode": "HM",
                    "countryName": "Heard Island and McDonald Islands"
                }, {

                    "countryCode": "HN",
                    "countryName": "Honduras"
                }, {

                    "countryCode": "HK",
                    "countryName": "Hong Kong"
                }, {

                    "countryCode": "HU",
                    "countryName": "Hungary"
                }, {

                    "countryCode": "IS",
                    "countryName": "Iceland"
                }, {

                    "countryCode": "IN",
                    "countryName": "India"
                }, {

                    "countryCode": "ID",
                    "countryName": "Indonesia"
                }, {

                    "countryCode": "IR",
                    "countryName": "Iran"
                }, {

                    "countryCode": "IQ",
                    "countryName": "Iraq"
                }, {

                    "countryCode": "IE",
                    "countryName": "Ireland"
                }, {

                    "countryCode": "IM",
                    "countryName": "Isle of Man"
                }, {

                    "countryCode": "IL",
                    "countryName": "Israel"
                }, {

                    "countryCode": "IT",
                    "countryName": "Italy"
                }, {

                    "countryCode": "CI",
                    "countryName": "Ivory Coast"
                }, {

                    "countryCode": "JM",
                    "countryName": "Jamaica"
                }, {

                    "countryCode": "JP",
                    "countryName": "Japan"
                }, {

                    "countryCode": "JE",
                    "countryName": "Jersey"
                }, {

                    "countryCode": "JO",
                    "countryName": "Jordan"
                }, {

                    "countryCode": "KZ",
                    "countryName": "Kazakhstan"
                }, {

                    "countryCode": "KE",
                    "countryName": "Kenya"
                }, {

                    "countryCode": "KI",
                    "countryName": "Kiribati"
                }, {

                    "countryCode": "XK",
                    "countryName": "Kosovo"
                }, {

                    "countryCode": "KW",
                    "countryName": "Kuwait"
                }, {

                    "countryCode": "KG",
                    "countryName": "Kyrgyzstan"
                }, {

                    "countryCode": "LA",
                    "countryName": "Laos"
                }, {

                    "countryCode": "LV",
                    "countryName": "Latvia"
                }, {

                    "countryCode": "LB",
                    "countryName": "Lebanon"
                }, {

                    "countryCode": "LS",
                    "countryName": "Lesotho"
                }, {

                    "countryCode": "LR",
                    "countryName": "Liberia"
                }, {

                    "countryCode": "LY",
                    "countryName": "Libya"
                }, {

                    "countryCode": "LI",
                    "countryName": "Liechtenstein"
                }, {

                    "countryCode": "LT",
                    "countryName": "Lithuania"
                }, {

                    "countryCode": "LU",
                    "countryName": "Luxembourg"
                }, {

                    "countryCode": "MO",
                    "countryName": "Macao"
                }, {

                    "countryCode": "MK",
                    "countryName": "Macedonia"
                }, {

                    "countryCode": "MG",
                    "countryName": "Madagascar"
                }, {

                    "countryCode": "MW",
                    "countryName": "Malawi"
                }, {

                    "countryCode": "MY",
                    "countryName": "Malaysia"
                }, {

                    "countryCode": "MV",
                    "countryName": "Maldives"
                }, {

                    "countryCode": "ML",
                    "countryName": "Mali"
                }, {

                    "countryCode": "MT",
                    "countryName": "Malta"
                }, {

                    "countryCode": "MH",
                    "countryName": "Marshall Islands"
                }, {

                    "countryCode": "MQ",
                    "countryName": "Martinique"
                }, {

                    "countryCode": "MR",
                    "countryName": "Mauritania"
                }, {

                    "countryCode": "MU",
                    "countryName": "Mauritius"
                }, {

                    "countryCode": "YT",
                    "countryName": "Mayotte"
                }, {

                    "countryCode": "MX",
                    "countryName": "Mexico"
                }, {

                    "countryCode": "FM",
                    "countryName": "Micronesia"
                }, {

                    "countryCode": "MD",
                    "countryName": "Moldova"
                }, {

                    "countryCode": "MC",
                    "countryName": "Monaco"
                }, {

                    "countryCode": "MN",
                    "countryName": "Mongolia"
                }, {

                    "countryCode": "ME",
                    "countryName": "Montenegro"
                }, {

                    "countryCode": "MS",
                    "countryName": "Montserrat"
                }, {

                    "countryCode": "MA",
                    "countryName": "Morocco"
                }, {

                    "countryCode": "MZ",
                    "countryName": "Mozambique"
                }, {

                    "countryCode": "MM",
                    "countryName": "Myanmar [Burma]"
                }, {

                    "countryCode": "NA",
                    "countryName": "Namibia"
                }, {

                    "countryCode": "NR",
                    "countryName": "Nauru"
                }, {

                    "countryCode": "NP",
                    "countryName": "Nepal"
                }, {

                    "countryCode": "NL",
                    "countryName": "Netherlands"
                }, {

                    "countryCode": "NC",
                    "countryName": "New Caledonia"
                }, {

                    "countryCode": "NZ",
                    "countryName": "New Zealand"
                }, {

                    "countryCode": "NI",
                    "countryName": "Nicaragua"
                }, {

                    "countryCode": "NE",
                    "countryName": "Niger"
                }, {

                    "countryCode": "NG",
                    "countryName": "Nigeria"
                }, {

                    "countryCode": "NU",
                    "countryName": "Niue"
                }, {

                    "countryCode": "NF",
                    "countryName": "Norfolk Island"
                }, {

                    "countryCode": "KP",
                    "countryName": "North Korea"
                }, {

                    "countryCode": "MP",
                    "countryName": "Northern Mariana Islands"
                }, {

                    "countryCode": "NO",
                    "countryName": "Norway"
                }, {

                    "countryCode": "OM",
                    "countryName": "Oman"
                }, {

                    "countryCode": "PK",
                    "countryName": "Pakistan"
                }, {

                    "countryCode": "PW",
                    "countryName": "Palau"
                }, {

                    "countryCode": "PS",
                    "countryName": "Palestine"
                }, {

                    "countryCode": "PA",
                    "countryName": "Panama"
                }, {

                    "countryCode": "PG",
                    "countryName": "Papua New Guinea"
                }, {

                    "countryCode": "PY",
                    "countryName": "Paraguay"
                }, {

                    "countryCode": "PE",
                    "countryName": "Peru"
                }, {

                    "countryCode": "PH",
                    "countryName": "Philippines"
                }, {

                    "countryCode": "PN",
                    "countryName": "Pitcairn Islands"
                }, {

                    "countryCode": "PL",
                    "countryName": "Poland"
                }, {

                    "countryCode": "PT",
                    "countryName": "Portugal"
                }, {

                    "countryCode": "PR",
                    "countryName": "Puerto Rico"
                }, {

                    "countryCode": "QA",
                    "countryName": "Qatar"
                }, {

                    "countryCode": "CG",
                    "countryName": "Republic of the Congo"
                }, {

                    "countryCode": "RO",
                    "countryName": "Romania"
                }, {

                    "countryCode": "RU",
                    "countryName": "Russia"
                }, {

                    "countryCode": "RW",
                    "countryName": "Rwanda"
                }, {

                    "countryCode": "RE",
                    "countryName": "Réunion"
                }, {

                    "countryCode": "BL",
                    "countryName": "Saint Barthélemy"
                }, {

                    "countryCode": "SH",
                    "countryName": "Saint Helena"
                }, {

                    "countryCode": "KN",
                    "countryName": "Saint Kitts and Nevis"
                }, {

                    "countryCode": "LC",
                    "countryName": "Saint Lucia"
                }, {

                    "countryCode": "MF",
                    "countryName": "Saint Martin"
                }, {

                    "countryCode": "PM",
                    "countryName": "Saint Pierre and Miquelon"
                }, {

                    "countryCode": "VC",
                    "countryName": "Saint Vincent and the Grenadines"
                }, {

                    "countryCode": "WS",
                    "countryName": "Samoa"
                }, {

                    "countryCode": "SM",
                    "countryName": "San Marino"
                }, {

                    "countryCode": "SA",
                    "countryName": "Saudi Arabia"
                }, {

                    "countryCode": "SN",
                    "countryName": "Senegal"
                }, {

                    "countryCode": "RS",
                    "countryName": "Serbia"
                }, {

                    "countryCode": "SC",
                    "countryName": "Seychelles"
                }, {

                    "countryCode": "SL",
                    "countryName": "Sierra Leone"
                }, {

                    "countryCode": "SG",
                    "countryName": "Singapore"
                }, {

                    "countryCode": "SX",
                    "countryName": "Sint Maarten"
                }, {

                    "countryCode": "SK",
                    "countryName": "Slovakia"
                }, {

                    "countryCode": "SI",
                    "countryName": "Slovenia"
                }, {

                    "countryCode": "SB",
                    "countryName": "Solomon Islands"
                }, {

                    "countryCode": "SO",
                    "countryName": "Somalia"
                }, {

                    "countryCode": "ZA",
                    "countryName": "South Africa"
                }, {

                    "countryCode": "GS",
                    "countryName": "South Georgia and the South Sandwich Islands"
                }, {

                    "countryCode": "KR",
                    "countryName": "South Korea"
                }, {

                    "countryCode": "SS",
                    "countryName": "South Sudan"
                }, {

                    "countryCode": "ES",
                    "countryName": "Spain"
                }, {

                    "countryCode": "LK",
                    "countryName": "Sri Lanka"
                }, {

                    "countryCode": "SD",
                    "countryName": "Sudan"
                }, {

                    "countryCode": "SR",
                    "countryName": "Suriname"
                }, {

                    "countryCode": "SJ",
                    "countryName": "Svalbard and Jan Mayen"
                }, {

                    "countryCode": "SZ",
                    "countryName": "Swaziland"
                }, {

                    "countryCode": "SE",
                    "countryName": "Sweden"
                }, {

                    "countryCode": "CH",
                    "countryName": "Switzerland"
                }, {

                    "countryCode": "SY",
                    "countryName": "Syria"
                }, {

                    "countryCode": "ST",
                    "countryName": "São Tomé and Príncipe"
                }, {

                    "countryCode": "TW",
                    "countryName": "Taiwan"
                }, {

                    "countryCode": "TJ",
                    "countryName": "Tajikistan"
                }, {

                    "countryCode": "TZ",
                    "countryName": "Tanzania"
                }, {

                    "countryCode": "TH",
                    "countryName": "Thailand"
                }, {

                    "countryCode": "TG",
                    "countryName": "Togo"
                }, {

                    "countryCode": "TK",
                    "countryName": "Tokelau"
                }, {

                    "countryCode": "TO",
                    "countryName": "Tonga"
                }, {

                    "countryCode": "TT",
                    "countryName": "Trinidad and Tobago"
                }, {

                    "countryCode": "TN",
                    "countryName": "Tunisia"
                }, {

                    "countryCode": "TR",
                    "countryName": "Turkey"
                }, {

                    "countryCode": "TM",
                    "countryName": "Turkmenistan"
                }, {

                    "countryCode": "TC",
                    "countryName": "Turks and Caicos Islands"
                }, {

                    "countryCode": "TV",
                    "countryName": "Tuvalu"
                }, {

                    "countryCode": "UM",
                    "countryName": "U.S. Minor Outlying Islands"
                }, {

                    "countryCode": "VI",
                    "countryName": "U.S. Virgin Islands"
                }, {

                    "countryCode": "UG",
                    "countryName": "Uganda"
                }, {

                    "countryCode": "UA",
                    "countryName": "Ukraine"
                }, {

                    "countryCode": "AE",
                    "countryName": "United Arab Emirates"
                }, {

                    "countryCode": "GB",
                    "countryName": "United Kingdom"
                }, {

                    "countryCode": "US",
                    "countryName": "United States"
                }, {

                    "countryCode": "UY",
                    "countryName": "Uruguay"
                }, {

                    "countryCode": "UZ",
                    "countryName": "Uzbekistan"
                }, {

                    "countryCode": "VU",
                    "countryName": "Vanuatu"
                }, {

                    "countryCode": "VA",
                    "countryName": "Vatican City"
                }, {

                    "countryCode": "VE",
                    "countryName": "Venezuela"
                }, {

                    "countryCode": "VN",
                    "countryName": "Vietnam"
                }, {

                    "countryCode": "WF",
                    "countryName": "Wallis and Futuna"
                }, {

                    "countryCode": "EH",
                    "countryName": "Western Sahara"
                }, {

                    "countryCode": "YE",
                    "countryName": "Yemen"
                }, {

                    "countryCode": "ZM",
                    "countryName": "Zambia"
                }, {

                    "countryCode": "ZW",
                    "countryName": "Zimbabwe"
                }, {
                    "countryCode": "AX",
                    "countryName": "Åland"
                }
            ];
            var _d = $q.defer();
            var _temp = [];

            countries.forEach(item => {
                var _obj = {};
                _obj.key = item.countryCode;
                _obj.value = item.countryName;
                _temp.push(_obj);
            });
            _d.resolve(_temp);
            return _d.promise;
        }

        function sexData() {
            var _d = $q.defer();
            var _temp = [];
            _temp.push({ key: '1', value: 'Male' });
            _temp.push({ key: '2', value: 'Female' });
            _d.resolve(_temp);
            return _d.promise;
        }

        function _getFormData() {
            return {
                addJoke:
                    [{
                        label: 'Category'
                        , name: 'Category'
                        , type: 'dlSelect'
                        , values: categoryData()
                    }, {
                        label: 'Joke'
                        , name: 'Description'
                        , type: 'dlTextEditor'
                    }],
                addCategory: [
                    {
                        label: 'Category Name'
                        , name: 'CategoryName'
                        , type: 'dlText'
                    }, {
                        label: 'Seo Url'
                        , name: 'SeoUrl'
                        , type: 'dlText'
                    }, {
                        label: 'Category Description'
                        , name: 'Description'
                        , type: 'dlTextEditor'
                    }, {
                        label: 'Meta title'
                        , name: 'MetaTitle'
                        , type: 'dlText'
                    }, {
                        label: 'Meta Description'
                        , name: 'MetaDescription'
                        , type: 'dlTextarea'
                    }, {
                        label: 'Meta keywords'
                        , name: 'MetaKeywords'
                        , type: 'dlText'
                    }, {
                        label: 'OG:Title'
                        , name: 'OGTitle'
                        , type: 'dlText'
                    }, {
                        label: 'OG:Description'
                        , name: 'OGDescription'
                        , type: 'dlTextarea'
                    }, {
                        label: 'OG:Image'
                        , name: 'OGImage'
                        , type: 'dlUpload'
                    }, {
                        label: 'Category Image'
                        , name: 'CategoryImage'
                        , type: 'dlUpload'
                    }
                ],
                addMainCategory: [
                    {
                        label: 'Main Category Name'
                        , name: 'MainCategoryName'
                        , type: 'dlText'
                    }, {
                        label: 'Main Category Description'
                        , name: 'MainCategoryDescription'
                        , type: 'dlTextarea'
                    }
                ],
                userDetail: [{
                    label: 'Name'
                    , name: 'UserName'
                    , type: 'dlText'
                }, {
                    label: 'Phone'
                    , name: 'Phone'
                    , type: 'dlText'
                }, {
                    label: 'Country'
                    , name: 'Country'
                    , type: 'dlSelect'
                    , values: countryData()
                }, {
                    label: 'Sex'
                    , name: 'Sex'
                    , type: 'dlSelect'
                    , values: sexData()
                }, {
                    label: 'About'
                    , name: 'About'
                    , type: 'dlTextarea'
                }, {
                    label: 'Date of Birth'
                    , name: 'DOB'
                    , type: 'dlCalender'
                }, {
                    label: 'Title'
                    , name: 'ProfileTitle'
                    , type: 'dlTextarea'
                }, {
                    label: 'Address'
                    , name: 'Address'
                    , type: 'dlTextarea'
                }],
                rejectReason: [
                    {
                        label: 'Reject Reason'
                        , name: 'RejectReason'
                        , type: 'dlText'
                    }
                ]
            }
        }

        function _getForm(formName) {
            var _formData = _getFormData();
            return _formData[formName];
        }
    }
})();