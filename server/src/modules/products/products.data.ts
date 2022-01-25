export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Headphones',
    price: 99.99,
    description: 'Headphones are a pair of small loudspeaker drivers worn on or around the head over a user\'s ears.',
    image: 'http://localhost:8080/product-1.jpeg',
    longDescription:
      `They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earspeakers, earphones or, colloquially, cans. Circumaural ('around the ear') and supra-aural ('over the ear') headphones use a band over the top of the head to hold the speakers in place. Another type, known as earbuds or earpieces consist of individual units that plug into the user's ear canal. A third type are bone conduction headphones, which typically wrap around the back of the head and rest in front of the ear canal, leaving the ear canal open. In the context of telecommunication, a headset is a combination of headphone and microphone.`,
  },
  {
    id: 2,
    name: 'Plant',
    price: 24.99,
    description: `Plants are predominantly photosynthetic eukaryotes of the kingdom Plantae`,
    image: 'http://localhost:8080/product-2.jpeg',
    longDescription:
      `Historically, the plant kingdom encompassed all living things that were not animals, and included algae and fungi; however, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria). By one definition, plants form the clade Viridiplantae (Latin name for "green plants"), a group that includes the flowering plants, conifers and other gymnosperms, ferns and their allies, hornworts, liverworts, mosses, and the green algae, but excludes the red and brown algae.`,
  },
  {
    id: 3,
    name: 'Sunglasses',
    price: 144.99,
    description: `Sunglasses or sun glasses are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.`,
    image: 'http://localhost:8080/product-3.jpeg',
    longDescription:
      `They can sometimes also function as a visual aid, as variously termed spectacles or glasses exist, featuring lenses that are colored, polarized or darkened. In the early 20th century, they were also known as sun cheaters (cheaters then being an American slang term for glasses)`,
  },
  {
    id: 4,
    name: 'Crayons',
    price: 12.50,
    description: `A crayon (or wax pastel) is a stick of pigmented wax used for writing or drawing. Wax crayons differ from pastels, in which the pigment is mixed with a dry binder such as gum arabic, and from oil pastels, where the binder is a mixture of wax and oil.`,
    image: 'http://localhost:8080/product-4.jpeg',
    longDescription:
      `Crayons are available in a range of prices, and are easy to work with. They are less messy than most paints and markers, blunt (removing the risk of sharp points present when using a pencil or pen), typically non-toxic, and available in a wide variety of colors. These characteristics make them particularly good instruments for teaching small children to draw in addition to being used widely by student and professional artists.`,
  },
  {
    id: 5,
    name: 'Banana',
    price: 1,
    description: `A banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.`,
    image: 'http://localhost:8080/product-5.jpeg',
    longDescription:
      `In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.`,
  },
  {
    id: 6,
    name: 'Honey',
    price: 17.99,
    description: `Honey is a sweet, viscous food substance made by honey bees and some other bees.`,
    image: 'http://localhost:8080/product-6.jpeg',
    longDescription:
      `Bees produce honey from the sugary secretions of plants (floral nectar) or from secretions of other insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Honey bees store honey in wax structures called honeycombs, whereas stingless bees store honey in pots made of wax and resin. The variety of honey produced by honey bees (the genus Apis) is the best-known, due to its worldwide commercial production and human consumption. Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture (meliponiculture in the case of stingless bees).`,
  },
  {
    id: 7,
    name: 'Cake',
    price: 28.50,
    description: `Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.`,
    image: 'http://localhost:8080/product-7.jpeg',
    longDescription:
      `The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder. Common additional ingredients and flavourings include dried, candied, or fresh fruit, nuts, cocoa, and extracts such as vanilla, with numerous substitutions for the primary ingredients. Cakes can also be filled with fruit preserves, nuts or dessert sauces (like pastry cream), iced with buttercream or other icings, and decorated with marzipan, piped borders, or candied fruit.`,
  },
  {
    id: 8,
    name: 'Coffee',
    price: 8.99,
    description: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus`,
    image: 'http://localhost:8080/product-8.jpeg',
    longDescription:
      `From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee. The seeds are then roasted, a process which transforms them into a consumable product: roasted coffee, which is ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee.`,
  },
  {
    id: 9,
    name: 'Milk',
    price: 0.89,
    description: `Milk is a nutrient-rich liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.`,
    image: 'http://localhost:8080/product-9.jpeg',
    longDescription:
      `Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system and thus reduces the risk of many diseases. Milk contains many other nutrients, including protein and lactose. Interspecies consumption of milk is not uncommon - many human beings consume the milk of other mammals.`,
  },
  {
    id: 10,
    name: 'Sugar',
    price: 6.50,
    description: `Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Simple sugars, also called monosaccharides, include glucose, fructose, and galactose. `,
    image: 'http://localhost:8080/product-10.jpeg',
    longDescription:
      `Compound sugars, also called disaccharides or double sugars, are molecules made of two monosaccharides joined by a glycosidic bond. Common examples are sucrose (glucose + fructose), lactose (glucose + galactose), and maltose (two molecules of glucose). Table sugar, granulated sugar, and regular sugar refer to sucrose, a disaccharide composed of glucose and fructose. In the body, compound sugars are hydrolysed into simple sugars.`,
  },
];

export default products;
