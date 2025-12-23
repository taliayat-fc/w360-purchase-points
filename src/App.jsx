import React, { useState } from 'react';

// First Screen - Points Purchase
function PointsPurchaseScreen({ points, onPurchase }) {
  const MIN_POINTS = 1000;
  const MAX_POINTS = 250000;
  const PRICE_PER_POINT = 0.02;

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    const snappedValue = Math.round(value / 1000) * 1000;
    onPurchase(snappedValue);
  };

  const formatPrice = (points) => {
    const price = (points * PRICE_PER_POINT).toFixed(2);
    return `AUD $${price}`;
  };

  const formatPoints = (points) => {
    return points.toLocaleString();
  };

  const sliderPercentage = ((points - MIN_POINTS) / (MAX_POINTS - MIN_POINTS)) * 100;

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '390px',
      margin: '0 auto',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Header */}
      <div style={{ position: 'relative', height: '116px', width: '100%' }}>
        {/* Status Bar */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '48px',
          padding: '0 31.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.5px' }}>09:41</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div>📶</div>
            <div>📡</div>
            <div>🔋</div>
          </div>
        </div>
        
        {/* Back Button */}
        <div style={{ position: 'absolute', top: '60px', left: '12px' }}>
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            ‹
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1, 
        padding: '0 24px 24px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '44px' 
      }}>
        {/* Purchase Points Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h1 style={{ 
              fontSize: '26px', 
              lineHeight: '30px', 
              fontWeight: 500, 
              color: '#001ede',
              margin: 0,
              fontFamily: 'World360, Inter, sans-serif'
            }}>
              Purchase points
            </h1>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '24px', 
              letterSpacing: '0.2px', 
              color: '#181818',
              fontWeight: 300,
              margin: 0,
              fontFamily: 'Inter, sans-serif'
            }}>
              Need a few more points? Top up and unlock the rewards you've been eyeing. Flights, upgrades, and more are just a few clicks away.
            </p>
          </div>

          {/* Current Balance Card */}
          <div style={{ 
            backgroundColor: '#f4f1ea', 
            borderRadius: '24px', 
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <p style={{ 
                fontSize: '14px', 
                lineHeight: '18px', 
                color: '#001ede',
                margin: 0,
                fontFamily: 'World360, Inter, sans-serif',
                fontWeight: 500
              }}>
                Your Current Balance
              </p>
              <p style={{ 
                fontSize: '14px', 
                lineHeight: '18px', 
                color: '#001ede',
                margin: 0,
                fontFamily: 'World360, Inter, sans-serif',
                fontWeight: 500
              }}>
                8,000 pts
              </p>
            </div>
            <p style={{ 
              fontSize: '12px', 
              lineHeight: '16px', 
              letterSpacing: '0.2px', 
              color: '#8B7355',
              fontWeight: 300,
              margin: 0,
              fontFamily: 'World360, Inter, sans-serif'
            }}>
              Available points to redeem
            </p>
          </div>
        </div>

        {/* Select Points Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h2 style={{ 
                fontSize: '26px', 
                lineHeight: '30px', 
                fontWeight: 500, 
                color: '#001ede',
                margin: 0,
                fontFamily: 'World360, Inter, sans-serif'
              }}>
                Select how many points
              </h2>
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '0.2px', 
                color: '#181818',
                fontWeight: 300,
                margin: 0,
                fontFamily: 'Inter, sans-serif'
              }}>
                Points must be in multiples of 1,000, up to a maximum of 250,000 per year.
              </p>
            </div>

            {/* Points Display Card */}
            <div style={{ 
              backgroundColor: '#f4f1ea', 
              borderRadius: '16px', 
              padding: '20px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <p style={{ 
                fontSize: '22px', 
                lineHeight: '28px', 
                color: '#001ede',
                textAlign: 'center',
                margin: 0,
                fontFamily: 'World360, Inter, sans-serif',
                fontWeight: 500
              }}>
                {formatPoints(points)} pts
              </p>
              <p style={{ 
                fontSize: '12px', 
                lineHeight: '16px', 
                letterSpacing: '0.2px', 
                color: '#181818',
                fontWeight: 600,
                textAlign: 'center',
                margin: 0,
                fontFamily: 'World360, Inter, sans-serif'
              }}>
                {formatPrice(points)}
              </p>
            </div>

            {/* Slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ position: 'relative', height: '24px', display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '7px', 
                  backgroundColor: '#f7f7f5', 
                  borderRadius: '999px' 
                }}></div>
                
                <div style={{ 
                  position: 'absolute', 
                  height: '7px', 
                  backgroundColor: '#001ede', 
                  borderRadius: '999px',
                  width: `${sliderPercentage}%`,
                  transition: 'width 0.15s'
                }}></div>
                
                <input
                  type="range"
                  min={MIN_POINTS}
                  max={MAX_POINTS}
                  step={1000}
                  value={points}
                  onChange={handleSliderChange}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '24px',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    zIndex: 10,
                    margin: 0,
                    padding: 0
                  }}
                />
                
                <style>{`
                  input[type="range"] {
                    -webkit-appearance: none;
                    appearance: none;
                  }
                  
                  input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    background: #001ede;
                    border: 3px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                  
                  input[type="range"]::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    background: #001ede;
                    border: 3px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                  
                  input[type="range"]::-webkit-slider-runnable-track {
                    background: transparent;
                  }
                  
                  input[type="range"]::-moz-range-track {
                    background: transparent;
                  }
                `}</style>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '14px', 
                lineHeight: '18px', 
                fontWeight: 600, 
                color: '#0c000f',
                fontFamily: 'World360, Inter, sans-serif'
              }}>
                <span>1,000 pts</span>
                <span>250,000 pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderTop: '1px solid #f0f0f0', 
          padding: '14px 24px 12px' 
        }}>
          <button 
            onClick={() => onPurchase(points, true)}
            style={{
              width: '100%',
              backgroundColor: '#001ede',
              color: '#ffffff',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0.2px',
              fontWeight: 500,
              padding: '10px 16px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif'
            }}>
            Purchase {formatPoints(points)} pts
          </button>
        </div>
        
        <div style={{ 
          backgroundColor: 'white', 
          display: 'flex', 
          justifyContent: 'center', 
          padding: '8px' 
        }}>
          <div style={{ 
            width: '133px', 
            height: '5px', 
            backgroundColor: 'black', 
            borderRadius: '100px' 
          }}></div>
        </div>
      </div>
    </div>
  );
}

// Second Screen - Payment Completion
function PaymentScreen({ points, onBack, onPaymentComplete }) {
  const PRICE_PER_POINT = 0.02;
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [saveCard, setSaveCard] = useState(true);

  const formatPrice = (points) => {
    const price = (points * PRICE_PER_POINT).toFixed(2);
    return `$${price}`;
  };

  const formatPoints = (points) => {
    return points.toLocaleString();
  };

  const totalPrice = (points * PRICE_PER_POINT).toFixed(2);

  const handlePay = () => {
    onPaymentComplete();
  };

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '390px',
      margin: '0 auto',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ position: 'relative', height: '116px', width: '100%' }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '48px',
          padding: '0 31.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.5px' }}>09:41</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div>📶</div>
            <div>📡</div>
            <div>🔋</div>
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: '60px', left: '12px' }}>
          <button 
            onClick={onBack}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
            ‹
          </button>
        </div>
      </div>

      <div style={{ 
        flex: 1, 
        overflowY: 'auto',
        padding: '0 24px 24px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '46px', maxWidth: '342px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h1 style={{ 
                fontSize: '26px', 
                lineHeight: '30px', 
                fontWeight: 500, 
                color: '#001ede',
                margin: 0,
                fontFamily: 'World360, Inter, sans-serif'
              }}>
                Complete your purchase
              </h1>
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '24px', 
                letterSpacing: '0.2px', 
                color: '#181818',
                fontWeight: 300,
                margin: 0,
                fontFamily: 'Inter, sans-serif'
              }}>
                Review and confirm your points purchase.
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#f4f1ea', 
              borderRadius: '24px', 
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', lineHeight: '18px', color: '#001ede', fontFamily: 'World360, Inter, sans-serif', fontWeight: 500 }}>
                  <span>Points to Purchase</span>
                  <span>{formatPoints(points)} pts</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: '#686868', fontFamily: 'World360, Inter, sans-serif', fontWeight: 300 }}>
                  <span>Balance after purchase</span>
                  <span style={{ textAlign: 'right' }}>18,000 pts</span>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#c8c8c8' }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', color: '#212121', fontFamily: 'World360, Inter, sans-serif', fontWeight: 300 }}>
                <span>Purchase amount</span>
                <span>AUD {formatPrice(points)}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ 
              fontSize: '26px', 
              lineHeight: '30px', 
              fontWeight: 500, 
              color: '#001ede',
              margin: 0,
              fontFamily: 'World360, Inter, sans-serif'
            }}>
              Make payment
            </h2>
            
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>🎁</span>
                <span style={{ fontSize: '16px', color: '#212121', fontFamily: 'Inter, sans-serif' }}>Gift card</span>
              </div>
              <span style={{ fontSize: '24px', color: '#212121' }}>+</span>
            </div>

            <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>🏦</span>
                <span style={{ fontSize: '16px', color: '#212121', fontFamily: 'Inter, sans-serif' }}>Commbank Awards</span>
              </div>
              <span style={{ fontSize: '24px', color: '#212121' }}>+</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ 
              fontSize: '26px', 
              lineHeight: '30px', 
              fontWeight: 500, 
              color: '#001ede',
              margin: 0,
              fontFamily: 'World360, Inter, sans-serif'
            }}>
              Select a payment type
            </h3>

            <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ padding: '16px', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input 
                      type="radio" 
                      checked={selectedPayment === 'credit'} 
                      onChange={() => setSelectedPayment('credit')}
                      style={{ width: '24px', height: '24px', cursor: 'pointer', accentColor: '#212121' }}
                    />
                    <span style={{ fontSize: '16px', color: '#212121', fontFamily: 'Inter, sans-serif' }}>Credit / Debit Card</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', paddingLeft: '32px' }}>
                    <img src="data:image/svg+xml,%3Csvg width='40' height='13' viewBox='0 0 40 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 0h34c1.65 0 3 1.35 3 3v7c0 1.65-1.35 3-3 3H3c-1.65 0-3-1.35-3-3V3c0-1.65 1.35-3 3-3z' fill='%231434CB'/%3E%3Cpath d='M10 6.5l3-3 3 3M10 6.5l3 3 3-3' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E" alt="Visa" style={{ height: '13px' }} />
                    <img src="data:image/svg+xml,%3Csvg width='27' height='21' viewBox='0 0 27 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10.5' r='10' fill='%23EB001B'/%3E%3Ccircle cx='17' cy='10.5' r='10' fill='%23FF5F00' fill-opacity='0.8'/%3E%3C/svg%3E" alt="Mastercard" style={{ height: '21px' }} />
                    <img src="data:image/svg+xml,%3Csvg width='43' height='14' viewBox='0 0 43 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h43v14H0V0z' fill='%23006FCF'/%3E%3C/svg%3E" alt="Amex" style={{ height: '14px' }} />
                    <img src="data:image/svg+xml,%3Csvg width='56' height='16' viewBox='0 0 56 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h56v16H0V0z' fill='%230079BE'/%3E%3C/svg%3E" alt="Diners" style={{ height: '16px' }} />
                  </div>
                </div>

                {selectedPayment === 'credit' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '0' }}>
                    <input 
                      type="text" 
                      value="keath@gmail.com"
                      readOnly
                      style={{ 
                        width: '100%',
                        padding: '16px', 
                        border: '1px solid #e0e0e0', 
                        borderRadius: '12px', 
                        fontSize: '16px',
                        fontFamily: 'Inter, sans-serif',
                        color: '#212121',
                        boxSizing: 'border-box'
                      }}
                    />
                    <input 
                      type="text" 
                      value="Loyalty member"
                      readOnly
                      style={{ 
                        width: '100%',
                        padding: '16px', 
                        border: '1px solid #e0e0e0', 
                        borderRadius: '12px', 
                        fontSize: '16px',
                        fontFamily: 'Inter, sans-serif',
                        color: '#212121',
                        boxSizing: 'border-box'
                      }}
                    />
                    <input 
                      type="text" 
                      value="09/29"
                      readOnly
                      style={{ 
                        width: '100%',
                        padding: '16px', 
                        border: '1px solid #e0e0e0', 
                        borderRadius: '12px', 
                        fontSize: '16px',
                        fontFamily: 'Inter, sans-serif',
                        color: '#212121',
                        boxSizing: 'border-box'
                      }}
                    />
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <input 
                        type="text" 
                        value="989"
                        readOnly
                        style={{ 
                          width: '120px',
                          padding: '16px', 
                          border: '1px solid #e0e0e0', 
                          borderRadius: '12px', 
                          fontSize: '16px',
                          fontFamily: 'Inter, sans-serif',
                          color: '#212121',
                          boxSizing: 'border-box',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <div style={{ 
                            width: '57px', 
                            height: '37px', 
                            border: '1px solid #e3e3e3', 
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <div style={{
                              position: 'absolute',
                              bottom: '8px',
                              right: '8px',
                              width: '17px',
                              height: '11px',
                              border: '1px solid #da2b2b',
                              borderRadius: '2px',
                              backgroundColor: 'rgba(218, 43, 43, 0.1)'
                            }}></div>
                            <span style={{ fontSize: '6px', color: '#6a6666', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>123</span>
                          </div>
                          <div style={{ 
                            width: '57px', 
                            height: '37px', 
                            border: '1px solid #e3e3e3', 
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            paddingTop: '5px'
                          }}>
                            <div style={{
                              width: '100%',
                              height: '8px',
                              backgroundColor: '#333',
                              marginBottom: '6px'
                            }}></div>
                            <div style={{
                              position: 'absolute',
                              top: '17px',
                              right: '8px',
                              width: '17px',
                              height: '11px',
                              border: '1px solid #da2b2b',
                              borderRadius: '2px',
                              backgroundColor: 'rgba(218, 43, 43, 0.1)'
                            }}></div>
                            <span style={{ fontSize: '6px', color: '#6a6666', position: 'absolute', top: '19px', right: '12px' }}>123</span>
                          </div>
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)', textAlign: 'center', lineHeight: '1.2', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
                          3 or 4 digit number
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input 
                        type="checkbox" 
                        checked={saveCard}
                        onChange={(e) => setSaveCard(e.target.checked)}
                        style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#212121', flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '12px', color: '#212121', fontFamily: 'Inter, sans-serif', lineHeight: '16px' }}>Save credit card details for future payments</span>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ height: '1px', backgroundColor: '#e0e0e0' }}></div>

              <div 
                onClick={() => setSelectedPayment('paypal')}
                style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="radio" 
                    checked={selectedPayment === 'paypal'} 
                    onChange={() => setSelectedPayment('paypal')}
                    style={{ width: '24px', height: '24px', cursor: 'pointer', accentColor: '#212121' }}
                  />
                  <span style={{ fontSize: '16px', color: '#212121', fontFamily: 'Inter, sans-serif' }}>PayPal</span>
                </div>
                <span style={{ fontSize: '16px', color: '#003087', fontWeight: 'bold' }}>PayPal</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#e0e0e0' }}></div>

              <div 
                onClick={() => setSelectedPayment('applepay')}
                style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="radio" 
                    checked={selectedPayment === 'applepay'} 
                    onChange={() => setSelectedPayment('applepay')}
                    style={{ width: '24px', height: '24px', cursor: 'pointer', accentColor: '#212121' }}
                  />
                  <span style={{ fontSize: '16px', color: '#212121', fontFamily: 'Inter, sans-serif' }}>Apple Pay</span>
                </div>
                <span style={{ fontSize: '20px' }}>🍎</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ 
              fontSize: '20px', 
              lineHeight: '24px', 
              fontWeight: 500, 
              color: '#001ede',
              margin: 0,
              fontFamily: 'World360, Inter, sans-serif'
            }}>
              Payment summary
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', lineHeight: '22px', fontWeight: 500, color: '#212121', fontFamily: 'Inter, sans-serif' }}>
                <span>Total - AUD</span>
                <span>${totalPrice}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', lineHeight: '16px', color: '#757575', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                <span>Remaining Amount</span>
                <span>$150.00</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px' }}>ℹ️</span>
              <p style={{ fontSize: '14px', lineHeight: '20px', color: '#212121', margin: 0, fontFamily: 'Inter, sans-serif' }}>
                The amount due should be allocated to complete the purchase.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ padding: '14px 24px 8px' }}>
          <button 
            onClick={handlePay}
            style={{
              width: '100%',
              backgroundColor: '#001ede',
              color: '#ffffff',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0.2px',
              fontWeight: 500,
              padding: '10px 16px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif'
            }}>
            Pay
          </button>
        </div>
        
        <div style={{ padding: '8px 24px' }}>
          <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: '#212121', textAlign: 'center', margin: 0, fontFamily: 'World360, Inter, sans-serif', fontWeight: 300 }}>
            By continuing, you agree to World360 Rewards Terms.
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          padding: '8px' 
        }}>
          <div style={{ 
            width: '133px', 
            height: '5px', 
            backgroundColor: 'black', 
            borderRadius: '100px' 
          }}></div>
        </div>
      </div>
    </div>
  );
}

// Third Screen - Success
function SuccessScreen({ points, onBack }) {
  const CURRENT_BALANCE = 8000;
  const newBalance = CURRENT_BALANCE + points;

  const formatPoints = (points) => {
    return points.toLocaleString();
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getFullYear();
    const time = now.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
    return `${day} ${month} ${year}, ${time} AEST`;
  };

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '390px',
      margin: '0 auto',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ position: 'relative', height: '116px', width: '100%' }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '48px',
          padding: '0 31.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.5px' }}>09:41</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div>📶</div>
            <div>📡</div>
            <div>🔋</div>
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: '60px', left: '12px' }}>
          <button 
            onClick={onBack}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
            ‹
          </button>
        </div>
      </div>

      <div style={{ 
        flex: 1, 
        padding: '0 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '199px', 
          height: '220px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          marginTop: '20px'
        }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain' 
            }}
          >
            <source src="/piggy.mp4" type="video/mp4" />
            <div style={{ fontSize: '80px' }}>🐷</div>
          </video>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px', 
          alignItems: 'center', 
          textAlign: 'center',
          width: '100%',
          maxWidth: '342px'
        }}>
          <h1 style={{ 
            fontSize: '26px', 
            lineHeight: '30px', 
            fontWeight: 500, 
            color: '#001ede',
            margin: 0,
            fontFamily: 'World360, Inter, sans-serif'
          }}>
            Purchase successful!
          </h1>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '24px', 
            letterSpacing: '0.2px', 
            color: '#0c000f',
            fontWeight: 300,
            margin: 0,
            fontFamily: 'Inter, sans-serif'
          }}>
            Your points have been added to your account.
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#f4f1ea', 
          borderRadius: '24px', 
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '342px',
          boxSizing: 'border-box',
          marginTop: '12px'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.2px',
            color: '#0c000f'
          }}>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 300 }}>Purchase amount</span>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 500 }}>{formatPoints(points)}pts</span>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.2px',
            color: '#0c000f'
          }}>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 300 }}>Transaction ID</span>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 500 }}>0lVAD00000009Pt2AI</span>
          </div>

          <div style={{ height: '1px', backgroundColor: '#c8c8c8', width: '100%' }}></div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.2px',
            color: '#0c000f'
          }}>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 300 }}>Date</span>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 500 }}>{getCurrentDateTime()}</span>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.2px',
            color: '#0c000f'
          }}>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 600 }}>New balance</span>
            <span style={{ fontFamily: 'World360, Inter, sans-serif', fontWeight: 600 }}>{formatPoints(newBalance)}pts</span>
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '8px' 
      }}>
        <div style={{ 
          width: '133px', 
          height: '5px', 
          backgroundColor: 'black', 
          borderRadius: '100px' 
        }}></div>
      </div>
    </div>
  );
}

// Main App Component
export default function PointsPurchase() {
  const [points, setPoints] = useState(10000);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePurchase = (newPoints, shouldNavigate = false) => {
    setPoints(newPoints);
    if (shouldNavigate) {
      setShowPayment(true);
    }
  };

  const handleBackFromPayment = () => {
    setShowPayment(false);
  };

  const handlePaymentComplete = () => {
    setShowSuccess(true);
  };

  const handleBackFromSuccess = () => {
    setShowSuccess(false);
  };

  if (showSuccess) {
    return <SuccessScreen points={points} onBack={handleBackFromSuccess} />;
  }

  if (showPayment) {
    return <PaymentScreen points={points} onBack={handleBackFromPayment} onPaymentComplete={handlePaymentComplete} />;
  }

  return <PointsPurchaseScreen points={points} onPurchase={handlePurchase} />;
}