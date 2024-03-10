import { useState } from "react"

function KisiEkleForm() {
    const [yeniAd, adGuncelle] = useState("")
    const [yeniTel, telGuncelle] = useState("")

    function kisiEkle() {
        const yeniKisi = { id: yeniAd+yeniTel , ad: yeniAd, tel: yeniTel }


        const rehberVeri = localStorage.getItem("rehberJSON")
        let rehberArray = JSON.parse(rehberVeri)

        rehberArray.push(yeniKisi)
        const yeniRehberJSON = JSON.stringify(rehberArray)
        localStorage.setItem("rehberJSON", yeniRehberJSON)
    }

    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <input value={yeniAd} onChange={(olay)=>{adGuncelle(olay.currentTarget.value)}} type="text" className="form-control" placeholder="Ad Soyad" />
                </div>

                <div className="col">
                    <input value={yeniTel} onChange={(olay)=>{telGuncelle(olay.currentTarget.value)}} type="text" className="form-control" placeholder="Telefon" />
                </div>

                <div className="col-2">
                    <button onClick={kisiEkle} className="btn btn-success">Ekle</button>
                </div>
            </div>
        </>
    )
}

export default KisiEkleForm