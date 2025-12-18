import React, { useState } from 'react';
import { Search, SlidersHorizontal, ShoppingCart, Star, ArrowLeft, CreditCard, Smartphone, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import BackToHomeButton from '../Components/BackToHome';
import { Images } from '../assets/Images';

const LiquorShop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentView, setCurrentView] = useState('shop');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    momoNumber: '',
    momoNetwork: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: ''
  });

  const products = [
    {
      id: 1,
      name: "Ciroc Vodka",
      price: 500,
      category: "Vodka",
      rating: 4.5,
      image: [Images.cirocVodka],
      description: "Premium French vodka distilled from fine French grapes"
    },
    {
      id: 2,
      name: "Johnnie Walker Blue Label",
      price: 3500,
      category: "Whisky",
      rating: 5.0,
      image: [Images.blueLabel],
      description: "The pinnacle of the Johnnie Walker Whisky brand"
    },
    {
      id: 3,
      name: "Don Julio 1942",
      price: 3500,
      category: "Tequila",
      rating: 5.0,
      image: [Images.donJulio1942],
      description: "Ultra-premium anejo tequila celebrating tradition"
    },
    {
      id: 4,
      name: "Courvoisier XO",
      price: 2500,
      category: "Cognac",
      rating: 4.8,
      image: [Images.courvoisier],
      description: "A blend of very old and mellow cognacs"
    },
    {
      id: 5,
      name: "Don Julio Reposado",
      price: 1080,
      category: "Tequila",
      rating: 4.7,
      image: [Images.reposado],
      description: "Aged to perfection for 8 months in oak barrels"
    },
    {
      id: 6,
      name: "Hennessy VSOP",
      price: 1050,
      category: "Cognac",
      rating: 4.6,
      image: [Images.henessyVSOP],
      description: "Balanced blend of complexity and sophistication"
    },
    {
      id: 7,
      name: "Hennessy VS",
      price: 700,
      category: "Cognac",
      rating: 4.4,
      image: [Images.hennessyVS],
      description: "The world's most popular cognac"
    },
    {
      id: 8,
      name: "Jack Daniels Single Barrel",
      price: 820,
      category: "Whisky",
      rating: 4.4,
      image: [Images.jackDanielsSingleBarrel],
      description: "Hand-selected single barrel Tennessee whiskey with bold character"
    },
    {
      id: 9,
      name: "Andre",
      price: 250,
      category: "Champagne",
      rating: 4.4,
      image: [Images.andre],
      description: "California sparkling wine perfect for celebrations"
    },
    {
      id: 10,
      name: "Baileys 1Litre",
      price: 450,
      category: "Liqueur",
      rating: 4.4,
      image: [Images.baileys],
      description: "Original Irish cream liqueur with smooth chocolate notes"
    },
    {
      id: 11,
      name: "Casamigos Blanco",
      price: 1200,
      category: "Tequila",
      rating: 4.4,
      image: [Images.casamigosBlanco],
      description: "Crisp and clean tequila with hints of citrus and vanilla"
    },
    {
      id: 12,
      name: "Casamigos Reposado",
      price: 1500,
      category: "Tequila",
      rating: 4.4,
      image: [Images.casamigosReposado],
      description: "Aged 7 months for soft caramel and cocoa flavors"
    },
    {
      id: 13,
      name: "Casamigos Anejo",
      price: 1600,
      category: "Tequila",
      rating: 4.4,
      image: [Images.casamigosAnejo],
      description: "Aged 14 months delivering pure and refined complexity"
    },
    {
      id: 14,
      name: "Bumbu Rum",
      price: 600,
      category: "Rum",
      rating: 4.4,
      image: [Images.bumbuRum],
      description: "Craft Caribbean rum with natural spices and rich flavors"
    },
    {
      id: 15,
      name: "Bumbu Cream",
      price: 500,
      category: "Rum",
      rating: 4.4,
      image: [Images.bumbuCream],
      description: "Smooth rum cream with hints of cinnamon and coconut"
    },
    {
      id: 16,
      name: "Bumbu XO Rum",
      price: 800,
      category: "Rum",
      rating: 4.4,
      image: [Images.bumbuXORum],
      description: "Premium aged rum finished in Spanish oak sherry casks"
    },
    {
      id: 17,
      name: "Martel Blue Swift 700ml",
      price: 1200,
      category: "Cognac",
      rating: 4.4,
      image: [Images.martellBlueSwift],
      description: "Innovative cognac finished in bourbon casks for smooth taste"
    },
    {
      id: 18,
      name: "Belaire Luxe",
      price: 600,
      category: "Champagne",
      rating: 4.4,
      image: [Images.belaireLuxe],
      description: "French sparkling wine with elegant floral and berry notes"
    },
    {
      id: 19,
      name: "Belaire Rose",
      price: 800,
      category: "Champagne",
      rating: 4.4,
      image: [Images.belaireRose],
      description: "Luxurious rose sparkling wine with fresh strawberry flavors"
    },
    {
      id: 20,
      name: "Remy Martin VSOP 1L",
      price: 1400,
      category: "Cognac",
      rating: 4.4,
      image: [Images.remyMartinVSOP],
      description: "Fine champagne cognac aged 4-12 years with vanilla oak notes"
    },
    {
      id: 21,
      name: "Hennessy XO",
      price: 3400,
      category: "Cognac",
      rating: 4.4,
      image: [Images.hennessyXO],
      description: "Extra old cognac with deep complexity and powerful aromas"
    },
    {
      id: 22,
      name: "Johnnie Walker Black Label",
      price: 500,
      category: "Whisky",
      rating: 4.5,
      image: [Images.blackLabel],
      description: "Iconic blend of over 40 whiskies aged 12 years"
    },
    {
      id: 23,
      name: "Don Julio Anejo",
      price: 1200,
      category: "Tequila",
      rating: 4.7,
      image: [Images.donJulioAnejo],
      description: "Aged 18 months for rich, complex flavors"
    },
    {
      id: 24,
      name: "Clase Azul Reposado",
      price: 3500,
      category: "Tequila",
      rating: 5.0,
      image: [Images.claseAzulReposado],
      description: "Ultra-premium tequila in handcrafted decanter"
    },
    {
      id: 25,
      name: "Chivas Regal",
      price: 700,
      category: "Whisky",
      rating: 4.5,
      image: [Images.chivasRegal],
      description: "Smooth blended Scotch whisky with honey and fruit notes"
    },
    {
      id: 26,
      name: "Courvoisier VSOP",
      price: 900,
      category: "Cognac",
      rating: 4.6,
      image: [Images.courvoisierVSOP],
      description: "Rich and complex cognac with hints of peach and toasted almonds"
    }
]
  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesPrice = true;
    if (priceFilter === 'under1000') matchesPrice = product.price < 1000;
    if (priceFilter === '1000to2000') matchesPrice = product.price >= 1000 && product.price < 2000;
    if (priceFilter === '2000to3000') matchesPrice = product.price >= 2000 && product.price < 3000;
    if (priceFilter === 'over3000') matchesPrice = product.price >= 3000;
    return matchesSearch && matchesPrice;
  });

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setCurrentView('detail');
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
  };

  const handleBackToShop = () => {
    setCurrentView('shop');
    setSelectedProduct(null);
    setQuantity(1);
    setOrderComplete(false);
  };

  const handleBack = () => {
    if (currentView === 'checkout') {
      setCurrentView('detail');
    } else {
      setCurrentView('shop');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  if (currentView === 'detail' && selectedProduct) {
    return (
      <div className="w-full bg-white min-h-screen py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <button onClick={handleBack} className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 mb-6 transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Shop</span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-2xl p-8">
              <img src={selectedProduct.image[0]} alt={selectedProduct.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-stone-500 uppercase mb-2">{selectedProduct.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{selectedProduct.name}</h1>
              <p className="text-3xl font-bold text-stone-900 mb-6">GHC {selectedProduct.price.toLocaleString()}</p>
              <p className="text-base text-stone-600 mb-8">{selectedProduct.description}</p>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center space-x-4">
                  <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="w-12 h-12 bg-stone-100 rounded-lg">-</button>
                  <span className="text-xl font-medium w-16 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 bg-stone-100 rounded-lg">+</button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6 p-4 bg-stone-50 rounded-lg">
                <span className="text-lg font-medium">Total</span>
                <span className="text-2xl font-bold">GHC {(selectedProduct.price * quantity).toLocaleString()}</span>
              </div>
              <button onClick={handleCheckout} className="w-full py-4 bg-stone-800 text-white rounded-lg hover:bg-stone-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'checkout' && selectedProduct) {
    if (orderComplete) {
      return (
        <div className="w-full bg-white min-h-screen py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-stone-600 mb-8">Thank you for your purchase</p>
            <button onClick={handleBackToShop} className="px-8 py-3 bg-stone-800 text-white rounded-lg">Continue Shopping</button>
          </div>
        </div>
      );
    }

    const total = selectedProduct.price * quantity;
    const deliveryFee = 50;
    const grandTotal = total + deliveryFee;

    return (
      <div className="w-full bg-white min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <button onClick={handleBack} className="flex items-center space-x-2 text-stone-600 mb-6">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-stone-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <input type="text" name="fullName" placeholder="Full Name" required value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                    <input type="tel" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                  </div>
                </div>
                <div className="bg-stone-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Delivery Address</h3>
                  <div className="space-y-4">
                    <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                    <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                  </div>
                </div>
                <div className="bg-stone-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button type="button" onClick={() => setPaymentMethod('momo')} className={`p-4 border-2 rounded-lg ${paymentMethod === 'momo' ? 'border-stone-800' : 'border-stone-300'}`}>
                      <Smartphone className="mx-auto mb-2" size={24} />
                      <p className="text-sm">Mobile Money</p>
                    </button>
                    <button type="button" onClick={() => setPaymentMethod('card')} className={`p-4 border-2 rounded-lg ${paymentMethod === 'card' ? 'border-stone-800' : 'border-stone-300'}`}>
                      <CreditCard className="mx-auto mb-2" size={24} />
                      <p className="text-sm">Card Payment</p>
                    </button>
                  </div>
                  {paymentMethod === 'momo' && (
                    <div className="space-y-4">
                      <select name="momoNetwork" required value={formData.momoNetwork} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg">
                        <option value="">Select Network</option>
                        <option value="mtn">MTN Mobile Money</option>
                        <option value="vodafone">Vodafone Cash</option>
                      </select>
                      <input type="tel" name="momoNumber" placeholder="Mobile Money Number" required value={formData.momoNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                    </div>
                  )}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <input type="text" name="cardNumber" placeholder="Card Number" required value={formData.cardNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="cardExpiry" placeholder="MM/YY" required value={formData.cardExpiry} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                        <input type="text" name="cardCVV" placeholder="CVV" required value={formData.cardCVV} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg" />
                      </div>
                    </div>
                  )}
                </div>
                <button type="submit" disabled={!paymentMethod} className="w-full py-4 bg-stone-800 text-white rounded-lg disabled:bg-stone-300">Complete Order</button>
              </form>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-stone-50 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                <div className="space-y-4 mb-6 pb-6 border-b">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-white rounded-lg p-2">
                     <img src={selectedProduct.image[0]} alt={selectedProduct.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{selectedProduct.name}</p>
                      <p className="text-xs text-stone-600">Qty: {quantity}</p>
                    </div>
                    <p className="text-sm font-medium">GHC {total.toLocaleString()}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>GHC {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span>GHC {deliveryFee}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-2xl font-bold">GHC {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className='mt-5 ml-5'><BackToHomeButton /></div>
    
    <div className="w-full bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">PREMIUM LIQUOR COLLECTION</h1>
          <p className="text-base text-stone-600">Discover Accra's finest selection</p>
        </div>
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg" />
            </div>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg">
              <option value="all">All Prices</option>
              <option value="under1000">Under GHC 1000</option>
              <option value="1000to2000">GHC 1000 - 2000</option>
              <option value="2000to3000">GHC 2000 - 3000</option>
              <option value="over3000">Over GHC 3000</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
          <p className="text-sm text-stone-600 mt-4">Showing {filteredProducts.length} of {products.length} products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="cursor-pointer" onClick={() => handleProductClick(product)}>
              <div className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-2xl transition">
                <div className="aspect-[3/4] bg-white p-6">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-300'} />
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 uppercase mb-1">{product.category}</p>
                  <h3 className="text-base font-medium text-stone-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">GHC {product.price.toLocaleString()}</p>
                    <button className="p-3 bg-stone-800 text-white rounded-full">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default LiquorShop;