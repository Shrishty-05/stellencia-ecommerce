import Product from "../models/Product";

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    // create a new record in product table [db] from the req posted from frontend

    res.status(201).json({
        // 201 - resource created
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create product",
      error: err.message,
    });
  }
};

// get products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    // find() -> fetch all records
    // sort -> -1 : newest first [descending]
    // 1 : oldest first [ascending]

    res.status(200).json(products); 
    // returns array of products

  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: err.message,
    });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, // comes from route
      req.body, // contains updated field
      {
        new: true,           
        // by defualt mongodb returns old doc, with new -> returns updated doc
        runValidators: true, // apply schema validation on update
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });

  } catch (err) {
    res.status(500).json({
      message: "Failed to update product",
      error: err.message,
    });
  }
};


// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    // if id exists => doc deleted, deleted doc returned , else null

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (err) {
    res.status(500).json({
      message: "Failed to delete product",
      error: err.message,
    });
  }

  
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};