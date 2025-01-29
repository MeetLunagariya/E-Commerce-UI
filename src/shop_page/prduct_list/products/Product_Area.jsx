import { img_1, img_10, img_11, img_12, img_13, img_14, img_15, img_16, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9 } from "../../../assets/img";
import Product from "./Product";

const products = [
  {
    id: 1,
    category: "mobile",
    badge_id: 1,
    image: img_1,
    star_value: 5,
    review_count: 789,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
  {
    id: 2,
    category: "mobile",
    badge_id: null,
    image: img_2,
    star_value: 5,
    review_count: 536,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: 2300,
  },
  {
    id: 3,
    category: "tv",
    badge_id: 2,
    image: img_3,
    star_value: 5,
    review_count: 423,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 4,
    category: "ear",
    badge_id: null,
    image: img_4,
    star_value: 4,
    review_count: 816,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 5,
    category: "drone",
    badge_id: null,
    image: img_5,
    star_value: 5,
    review_count: 647,
    description: "Wired Over-Ear Gaming Headphones with USB",
    price: 1500,
  },
  {
    id: 6,
    category: "tv",
    badge_id: 4,
    image: img_6,
    star_value: 4,
    review_count: 877,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: 1200,
  },
  {
    id: 7,
    category: "tv",
    badge_id: null,
    image: img_7,
    star_value: 5,
    review_count: 877,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250,
  },
  {
    id: 8,
    category: "mobile",
    badge_id: 3,
    image: img_8,
    star_value: 5,
    review_count: 583,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    price: 220,
  },
  {
    id: 9,
    category: "ear",
    badge_id: 2,
    image: img_9,
    star_value: 4,
    review_count: 360,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 10,
    category: "ear",
    badge_id: null,
    image: img_10,
    star_value: 5,
    review_count: 798,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 11,
    category: "keyboard",
    badge_id: 1,
    image: img_11,
    star_value: 5,
    review_count: 600,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
  {
    id: 12,
    category: "printer",
    badge_id: null,
    image: img_12,
    star_value: 5,
    review_count: 583,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250,
  },
  {
    id: 13,
    category: "camera",
    badge_id: null,
    image: img_13,
    star_value: 4,
    review_count: 740,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: 2300,
  },
  {
    id: 14,
    category: "camera",
    badge_id: 3,
    image: img_14,
    star_value: 4,
    review_count: 556,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 220,
  },
  {
    id: 15,
    category: "printer",
    badge_id: null,
    image: img_15,
    star_value: 4,
    review_count: 536,
    description: "Wired Over-Ear Gaming Headphones with USB",
    price: 1500,
  },
  {
    id: 16,
    category: "washing_machine",
    badge_id: 4,
    image: img_16,
    star_value: 4,
    review_count: 423,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: 1200,
  },
  {
    id: 17,
    category: "tv",
    badge_id: 1,
    image: img_6,
    star_value: 5,
    review_count: 738,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
  {
    id: 18,
    category: "mobile",
    badge_id: null,
    image: img_6,
    star_value: 5,
    review_count: 536,
    description: "Samsung Electronics Samsung Galexy S21 5G",
    price: 2300,
  },
  {
    id: 19,
    category: "ac",
    badge_id: 2,
    image: img_6,
    star_value: 5,
    review_count: 423,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 20,
    category: "headphone",
    badge_id: null,
    image: img_6,
    star_value: 4,
    review_count: 816,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 21,
    category: "mobile",
    badge_id: 2,
    image: img_6,
    star_value: 4,
    review_count: 994,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360,
  },
  {
    id: 22,
    category: "laptop",
    badge_id: null,
    image: img_6,
    star_value: 5,
    review_count: 492,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250,
  },
  {
    id: 23,
    category: "printer",
    badge_id: 4,
    image: img_6,
    star_value: 5,
    review_count: 798,
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: 80,
  },
  {
    id: 24,
    category: "laptop",
    badge_id: 1,
    image: img_6,
    star_value: 5,
    review_count: 600,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70,
  },
];

const badge_value = {
  1: { val: "hot", color: "#EE5858" },
  2: { val: "Best Deals", color: "#2DA5F3" },
  3: { val: "sale", color: "#2DB224" },
  4: { val: "25% off", color: "#EFD33D" },
};

const Product_Area = () => {
  return (
    <div >
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <>
            <li key={product.id}>
              <Product
                product={product}
                key={product.id}
                badge_value={
                  product.badge_id ? badge_value[product.badge_id] : null
                }
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Product_Area;
