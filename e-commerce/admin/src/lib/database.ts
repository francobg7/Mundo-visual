// Simulación simple de base de datos para productos
// En producción, esto se conectaría a una base de datos real

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

// Almacenamiento temporal en memoria (se perdería al reiniciar)
let products: Product[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    category: "t-shirts",
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Nike Air Jordan 1",
    shortDescription: "Icónicas sneakers Jordan 1 en colorway Chicago",
    description: "Las legendarias Air Jordan 1 Retro High en el clásico colorway Chicago. Fabricadas con cuero premium y suela de goma duradera.",
    price: 189.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["chicago", "bred", "royal"],
    images: {
      chicago: "/products/jordan1-chicago.jpg",
      bred: "/products/jordan1-bred.jpg",
      royal: "/products/jordan1-royal.jpg",
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = products.length + 1;

// Funciones CRUD simuladas
export const database = {
  // Obtener todos los productos
  getAllProducts: async (): Promise<Product[]> => {
    return [...products];
  },

  // Obtener producto por ID
  getProductById: async (id: number): Promise<Product | null> => {
    return products.find(p => p.id === id) || null;
  },

  // Crear nuevo producto
  createProduct: async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
    const newProduct: Product = {
      ...productData,
      id: nextId++,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    products.push(newProduct);
    return newProduct;
  },

  // Actualizar producto
  updateProduct: async (id: number, productData: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null> => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;

    products[index] = {
      ...products[index],
      ...productData,
      updatedAt: new Date()
    };

    return products[index];
  },

  // Eliminar producto
  deleteProduct: async (id: number): Promise<boolean> => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;

    products.splice(index, 1);
    return true;
  },

  // Filtrar productos por categoría
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    return products.filter(p => p.category === category);
  }
};

// Función para simular subida de imágenes
export const uploadImage = async (file: File): Promise<string> => {
  // En producción, esto subiría la imagen a un servicio como AWS S3, Cloudinary, etc.
  // Por ahora, simulamos que se sube y devolvemos una URL ficticia
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const fileName = `${Date.now()}-${file.name}`;
      const imageUrl = `/uploads/${fileName}`;
      resolve(imageUrl);
    }, 1000); // Simular delay de subida
  });
}; 