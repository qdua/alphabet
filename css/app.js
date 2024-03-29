const alphabet = {
    "А": "s_1_a",
    "Б": "s_2_b",
    "В": "s_3_v",
    "Г": "s_4_g",
    "Ґ": "s_5_g",
    "Д": "s_6_d",
    "Е": "s_7_e",
    "Э": "s_8_e",
    "Ж": "s_9_zh",
    "З": "s_10_z",
    "И": "s_11_ji",
    "І": "s_12_i",
    "Ї": "s_13_ii",
    "Й": "s_14_yi",
    "К": "s_15_k",
    "Л": "s_16_l",
    "М": "s_17_m",
    "Н": "s_18_n",
    "О": "s_19_o",
    "П": "s_20_p",
    "Р": "s_21_r",
    "С": "s_22_s",
    "Т": "s_23_t",
    "У": "s_24_u",
    "Ф": "s_25_f",
    "Х": "s_26_h",
    "Ц": "s_27_tc",
    "Ч": "s_28_ch",
    "Ш": "s_29_sh",
    "Щ": "s_30_shc",
    "Ю": "s_31_y",
    "Я": "s_32_ja",
    "Ь": "s_33_mz"
}

const keyboard = document.querySelector('.alphabet')
const qwerty = document.querySelector('.qwerty')

for (const [key, value] of Object.entries(alphabet)) {
    keyboard.innerHTML += '<button data-sign="' + value + '">' + key + '</button>'
}
keyboard.innerHTML += '<button class="space"><i>&rbrack;</i></button>'
keyboard.innerHTML += '<button class="clear">Очистити</button>'

qwerty.addEventListener('click', () => keyboard.classList.toggle('open'))

deaf.addEventListener('input', () => {
    deaf.value = deaf.value.replace(/[^а-яА-ЯёЁ ]/g, '').toUpperCase()
    signUpdate()
})

document.querySelector('.clear').addEventListener('click', () => {
    deaf.value = ''
    signUpdate()
})

document.querySelector('.space').addEventListener('click', () => {
    deaf.value += ' '
    signUpdate()
})

window.addEventListener('load', () => {
    keyboard.querySelectorAll('button[data-sign]').forEach(element => {
        element.addEventListener('click', () => {
            deaf.value += element.innerText
            signUpdate()
        })
    })
})

signUpdate()

function signUpdate() {
    text.innerText = deaf.value.length ? deaf.value : 'МРІЙ'

    sign.innerHTML = ''
    for (const key of text.innerText.split('')) {
        const s = document.createElement('s')

        if (key != ' ') {
            s.setAttribute('data-sign', alphabet[key])
            s.innerText = key
        }

        sign.appendChild(s)
    }
}