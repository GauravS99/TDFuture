from numpy import array, genfromtxt
from keras.models import Sequential
from keras.layers import LSTM
from keras.layers import Dense

# Dataset
X = array(genfromtxt('out.txt', delimiter='\t').tolist())
y = array(genfromtxt('ans.txt', delimiter='\t').tolist())


X = X.reshape((X.shape[0], X.shape[1], 1))

# define model
model = Sequential()
model.add(LSTM(60, activation='relu', input_shape=(11, 1)))
model.add(Dense(1))

# msle to minimize loss
model.compile(optimizer='adam', loss='mean_squared_logarithmic_error')
# fit model
model.fit(X, y, epochs=250)
# save model
model.save('model.tensorflow')
