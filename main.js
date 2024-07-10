function get_user() {
    const user = document.getElementsByTagName('input')[0]
    return user.value
}

const btn_cek = document.getElementById('cek')
const display_result = document.getElementsByTagName('span')[0]
let a = 0
btn_cek.addEventListener('click', () => {
    a += 1
    if (a == 1) {
        const Eror = document.getElementById('error')
        user = get_user()
        if (user != '') {
            Eror.style.display='none'
            const khodam = {
                0 : 'tidak ada',
                1 : 'rawa rontek',
                2 : 'macan putih', 
                3 : 'macam negro',
                4 : 'singa api',
                5 : 'keinci lincah',
                6 : 'babi kayang',
                7 : 'peler curut',
                8 : 'ambatukam',
                9 : 'anjeng negro',
                10 : 'titid putus',
                11 : 'mio mirza',
                12 : 'vicidor',
                13 :'kak gem',
                14 :'om burhan',
                15 :'nyi blorong',
                16 :'kunti tobrut',
                17 :'titid gunderuwo',
                18 :'sempak pocong',
                19 :'tuyul mulet ',
                20 :'pepek kapal selem'
            }

            let rdm = Math.floor(Math.random() * 21)
        
            let result  = khodam[rdm]
            display_result.innerHTML=result
        }
        else {
            a = 0
            Eror.style.display='flex'
        }
    }
})

const xelete = document.getElementById('Delete')
xelete.onclick = () => {
    a = 0
    const user = document.getElementsByTagName('input')[0]
    user.value = ''
    display_result.innerHTML=''
}
