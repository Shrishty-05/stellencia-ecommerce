// import mongoose from "mongoose";

// const ProductSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     //   trim: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },

//     brand: {
//       type: String,
//       required: true,
//     },

//     category: {
//       type: String,
//       required: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     discountPrice: {
//       type: Number,
//       default: 0,
//     },

//     countInStock: {
//       type: Number,
//       required: true,
//       default: 0,
//     },

//     image: {
//       type : String
//     },

//     rating: {
//       type: Number,
//       default: 0,
//     },

//     numReviews: {
//       type: Number,
//       default: 0,
//     },

//     reviews: [
//       {
//         user: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "User",
//         },
//         name: String,
//         rating: Number,
//         comment: String,
//       },
//     ],

//     isFeatured: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Product", ProductSchema);

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["men", "women", "unisex"],
      default: "women"
    },

    tags: [
      {
        type: String
      }
    ],

    occasion: [
      {
        type: String
      }
    ],

    price: {
      type: Number,
      required: true,
    },

    discountPrice: {
      type: Number,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String
    },

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: String,
        rating: Number,
        comment: String,
      },
    ],

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);