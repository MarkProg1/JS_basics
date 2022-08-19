const products = [
    {
        name: "Сервоприводы",
        description:
            "Lorem, asdkgg, sit dfgj dgdlfaaa asdkmrrt. kMSD SDFSDKFL; SDFL;KSDFLS;SS SLDFKSFLSF;LKL ;SFDSFSF;LKS SLFKSD;F",
        price: 2000,
        availible: true,
    },
    {
        name: "Generator",
        description:
            "Lorem, asdkgg, sit dfgj dgdlfaaa asdkmrrt. kMSD SDFSDKFL; SDFL;KSDFLS;SS SLDFKSFLSF;LKL ;SFDSFSF;LKS SLFKSD;F",
        price: 2000,
        availible: true,
    },
    {
        name: "Another Card",
        description:
            "Lorem, asdkgg, sit dfgj dgdlfaaa asdkmrrt. kMSD SDFSDKFL; SDFL;KSDFLS;SS SLDFKSFLSF;LKL ;SFDSFSF;LKS SLFKSD;F",
        price: 2000,
        availible: true,
    },
];

const createProductCard = (product) => {
    const containerRef = document.createElement("div");

    containerRef.classList.add("product-card");

    const titleRef = document.createElement("h2");
    titleRef.textContent = product.name;
    titleRef.classList.add("product-card__name");

    const descRef = document.createElement("p");
    descRef.textContent = product.description;

    const priceRef = document.createElement("p");
    priceRef.textContent = `Цена: ${product.price} кредитов.`;

    /*
containerRef.appendChild(titleRef);
containerRef.appendChild(descRef);
containerRef.appendChild(priceRef);
*/

    containerRef.append(titleRef, descRef, priceRef);
    return containerRef;
};

const productsRef = document.querySelector("#products");

const productCard = products.map((product) => createProductCard(product));

productsRef.append(...productCard);
