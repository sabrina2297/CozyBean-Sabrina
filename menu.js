function generateMenuCards(category, menuItems) {
  const cards = menuItems.map(item => {
    const { name, description } = item;

    return `
      <div class="card me-3 my-4 d-sm-flex flex-sm-column card-menu">
        <div class="row g-0">
          <div class="col-6">
            <img src="images/menu/${name.toLowerCase()}.jpeg" class="img-fluid rounded" alt="..." style="width: 100%; height: auto;">
          </div>
          <div class="col">
            <div class="card-body text-start">
              <h5 class="card-title fs-3">${name}</h5>
              <p class="card-text mt-2 fs-6">${description}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const html = `
    <div class="mb-2" id="${category}">
      <div class="ps-sm-5">
        <h2 class="text-center text-md-start display-4 themenu">${category}</h2>
        <div class="d-flex flex-wrap justify-content-start">
          ${cards}
        </div>
      </div>
    </div>
  `;

  return html;
}

// Contoh penggunaan
const coffeeMenu = [
  { name: 'Espresso', description: 'Kekuatan kopi murni dalam secangkir kecil. Rasakan sensasi pahit dan aroma kopi yang kaya.' },
  { name: 'Latte', description: 'Kenikmatan lembut kopi espresso yang dipadukan dengan susu lembut, hal sempurna untuk memulai pagi Anda.' },
  { name: 'Cappuccino', description: 'Kombinasi sempurna dari espresso, susu, dan busa yang lembut, siap untuk memanjakan lidah Anda.' },
  { name: 'Kopi Gula Aren', description: 'Perpaduan kopi, gula aren, dan susu, menghasilkan rasa manis alami yang khas.' },
  { name: 'Cold Brew', description: 'Kopi yang direndam dalam air dingin selama berjam-jam, menghasilkan rasa kopi yang halus dan bebas rasa pahit.' }
];

const teaMenu = [
  { name: 'Green Tea', description: 'Rasakan sentuhan alami kelezatan dan kekayaan antioksidan yang menakjubkan dalam setiap tegukan Teh Hijau.' },
  { name: 'Oolong Tea', description: 'Membawa harmoni unik dari Teh Hijau dan Teh Hitam, Teh Oolong menyajikan perpaduan yang memikat dan menggugah selera.' },
  { name: 'Fruit Tea', description: 'Nikmati kesegaran musim panas yang mekar dalam Teh Buah yang mempesona, memberikan semangat dan cita rasa yang menggoda.' },
  { name: 'Chamomile Tea', description: 'Rileks dan nikmati kedamaian dengan Teh Chamomile yang menenangkan, membawa keharmonisan alam ke dalam cangkir Anda.' }
];

const milkMenu = [
  { name: 'Chocolate Milkshake', description: 'Nikmati sensasi segar susu cokelat klasik yang lezat. Sempurna untuk menghilangkan dahaga dan memanjakan lidah Anda setiap saat.' },
  { name: 'Vanilla Milk Tea', description: 'Padukan kelembutan susu dengan aroma vanila yang menyegarkan dalam minuman teh yang nikmat. Rasakan sensasi penyegaran yang tak tertandingi.' },
  { name: 'Strawberry Smoothie', description: 'Kenikmatan segar dari buah stroberi yang dicampur dengan susu segar dan sedikit yogurt. Setiap tegukan penuh dengan manisnya buah-buahan alami.' },
  { name: 'Iced Caramel Latte', description: 'Gabungan sempurna antara espresso yang kuat, susu lembut, dan sirup karamel yang manis. Minuman yang cocok untuk penyemangat di pagi hari.' },
  { name: 'Matcha Latte', description: 'Campuran lembut antara susu hangat dan bubuk matcha premium. Rasakan aroma dan rasa unik matcha dalam setiap tegukan.' },
  { name: 'Hazelnut Milkshake', description: 'Nikmati milkshake kaya rasa dengan sentuhan hazelnut yang lezat. Paduan manis dan gurih yang memanjakan lidah.' }
];

const pastryMenu = [
  { name: 'Butter Croissant', description: 'Nikmati kesempurnaan pastry klasik yang renyah di luar dan lembut di dalam, dengan sentuhan mentega yang kaya.' },
  { name: 'Chocolate Éclair', description: 'Pecinta cokelat pasti akan jatuh cinta pada éclair lembut ini yang diisi dengan krim cokelat lezat dan dilapisi dengan cokelat yang menggoda.' },
  { name: 'Blueberry Muffin', description: 'Muffin lembut dengan potongan buah blueberry yang manis di dalamnya. Pilihan sempurna untuk camilan ringan di tengah hari.' },
  { name: 'Cinnamon Roll', description: 'Gulungan pastry lembut yang dipenuhi dengan gula kayu manis dan dilapisi dengan glazur gula yang manis. Nikmati sensasi kehangatan dan aroma rempah yang menggoda.' },
  { name: 'Almond Croissant', description: 'Croissant yang lezat diisi dengan lapisan almond yang kaya dan dilumuri dengan glazur almond. Kombinasi manis dan gurih yang memikat.' },
  { name: 'Fruit Danish', description: 'Pastry ringan yang diisi dengan berbagai potongan buah segar dan dilapisi dengan lapisan pastry yang renyah.' }
];

const sweetMenu = [
  { name: 'Chocolate Cake', description: 'Kelezatan cokelat dalam setiap gigitan! Kue cokelat yang lembut, dilapisi dengan ganache cokelat halus untuk pengalaman manis yang memikat.' },
  { name: 'Fruit Tart', description: 'Paduan sempurna antara pastry renyah dan berbagai potongan buah segar, diselimuti dengan lapisan lembut krim vanilla. Manisnya buah-buahan bertemu kelembutan pastry.' },
  { name: 'Red Velvet Cupcake', description: 'Cupcake lembut dengan warna merah muda yang memikat, dilapisi dengan frosting cream cheese yang lembut dan manis.' },
  { name: 'Panna Cotta', description: 'Puding Italia yang lembut dan halus, disajikan dengan saus buah segar di atasnya. Kelezatan yang lembut dan manis dalam setiap sendokannya.' },
  { name: 'Lemon Pie', description: 'Pai lemon yang lezat dengan lapisan lemon yang asam dan topping meringue yang lembut dan manis. Kelezatan yang sempurna untuk mengakhiri hidangan.' },
  { name: 'Tiramisu', description: 'Dessert Italia klasik yang terdiri dari lapisan ladyfinger yang direndam kopi, mascarpone lembut, dan bubuk cokelat. Kenikmatan yang memanjakan lidah.' }
];

const sandwichMenu = [
  { name: 'Grilled Chicken Panini', description: 'Potongan ayam panggang yang lembut dipadukan dengan keju meleleh, tomat segar, dan daun selada, semuanya di dalam roti panini yang renyah.' },
  { name: 'Caprese Panini', description: 'Roti panini yang dipanggang dengan sempurna, diisi dengan tomat segar, mozzarella lembut, daun basil, dan sedikit balsamic glaze. Kesederhanaan yang lezat dalam setiap gigitan.' },
  { name: 'Turkey Club Sandwich', description: 'Potongan daging kalkun panggang, bacon renyah, selada segar, tomat, dan mayones, semua diapit dalam roti gandum yang lembut.' },
  { name: 'Vegetarian Hummus Wrap', description: 'Wrap lezat dengan hummus lembut, sayuran segar, dan potongan keju feta. Pilihan yang sempurna untuk camilan sehat.' },
  { name: 'Smoked Salmon Bagel', description: 'Bagel panggang yang diisi dengan potongan salmon asap, krim keju lembut, irisan tomat, dan bawang merah. Kenikmatan yang kaya protein dan lemak sehat.' }
];

const saladMenu = [
  { name: 'Caesar Salad', description: 'Campuran segar dari daun romaine, crouton gurih, keju parmesan, dan dressing Caesar yang klasik. Rasakan kesegaran dan kelezatan dalam setiap gigitan.' },
  { name: 'Greek Salad', description: 'Kelezatan salad Yunani dengan campuran mentimun segar, tomat manis, keju feta gurih, dan olive hitam yang kaya rasa, semuanya dilumuri dengan dressing lemon segar.' },
  { name: 'Spinach Salad', description: 'Daun bayam segar yang dicampur dengan potongan telur rebus, bacon, keju feta, dan kacang almond panggang, semuanya dilumuri dengan dressing balsamico yang lezat.' },
  { name: 'Quinoa Salad', description: 'Campuran sehat dari quinoa, sayuran segar, kacang-kacangan, dan dressing lemon. Salad yang lezat dan memuaskan.' },
  { name: 'Asian Sesame Chicken Salad', description: 'Salad yang kaya rasa dengan potongan daging ayam panggang, sayuran segar, dan dressing wijen Asia yang khas. Kombinasi sempurna antara rasa dan tekstur.' }
];

const chipsMenu = [
  { name: 'Keripik Kentang', description: 'Kriuk yang tak tertahankan.' },
  { name: 'Keripik Singkong', description: 'Gurihnya yang menggoda lidah.' },
  { name: 'Keripik Ubi', description: 'Rasa alami yang memikat.' }
];

const menuContainer = document.getElementById('menuList');
const coffeeMenuHtml = generateMenuCards('Coffee', coffeeMenu);
const teaMenuHtml = generateMenuCards('Tea', teaMenu);
const milkMenuHtml = generateMenuCards('Milk', milkMenu);
const pastryMenuHtml = generateMenuCards('Pastry', pastryMenu);
const sweetMenuHtml = generateMenuCards('Sweet', sweetMenu);
const sandwichMenuHtml = generateMenuCards('Sandwich', sandwichMenu);
const saladMenuHtml = generateMenuCards('Salad', saladMenu);
const chipsMenuHtml = generateMenuCards('Chips', chipsMenu);

menuContainer.innerHTML = coffeeMenuHtml + teaMenuHtml + milkMenuHtml + pastryMenuHtml + sweetMenuHtml + sandwichMenuHtml + saladMenuHtml + chipsMenuHtml;