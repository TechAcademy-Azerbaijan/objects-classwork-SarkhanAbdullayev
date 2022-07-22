let list = [
    {marka:'Hyundai', rəng: 'Boz', anacaqNövü: 'Benzin', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 13000},
    {marka:'Hyundai', rəng: 'Qara', anacaqNövü: 'Dizel', sürətlərQutusu: 'Mexanika', banNövü: 'Kupe', qiymət: 43000},
    {marka:'Toyota', rəng: 'Qırmızı', anacaqNövü: 'Benzin', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 24000},
    {marka:'Subaru', rəng: 'Qara', anacaqNövü: 'Elektrik', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 20000},
    {marka:'Kia', rəng: 'Ağ', anacaqNövü: 'Benzin', sürətlərQutusu: 'Mexanika', banNövü: 'Hetçbek', qiymət: 19000},
    {marka:'Hyundai', rəng: 'Qara', anacaqNövü: 'Dizel', sürətlərQutusu: 'Avtomat', banNövü: 'Sedan', qiymət: 33000},
    {marka:'BMW', rəng: 'Göy', anacaqNövü: 'Benzin', sürətlərQutusu: 'Mexanika', banNövü: 'Hetçbek', qiymət: 16000},
]


let criteria = ["Benzin", "Avtomat", "Sedan"]


let count = 0;
let count3 = 0;

for(let i = 0; i < list.length ; i++){
    for(let key in list[i]){
        if(criteria.includes(list[i][key]) || list[i][key] < 30000){
            count3++;
            if(count3 >= 3){
                count++;
                break;
            }
        }
    }
    count3 = 0;
}
console.log(count);
