# FoodPrint

![AppLanding](https://github.com/hKedia/foodprint/blob/master/documentation/landing.png)

## Links

Project URL: https://github.com/hKedia/foodprint

Application: https://farfrogs.rezervatorul.ro/

API(Batch of Sandwiches): https://foodprint.rezervatorul.ro/chain/getChain?id=1005

API(Get all harvest for a did): https://foodprint.rezervatorul.ro/users/getHarvest?did=DID_2

## Current state of the application

* `react-qr-reader` didn't work in SSR(Server Side Rendering), therefore had to use server in `dev` mode. Couldn't use docker container.
* Currently deployed as a EC2 Instance with `nginx`.
* Login to the application requires a Blockstack Id.
* API's running on Amazon EKS clusters.
* If an error is shown after login, kindly reload from the root [url](https://farfrogs.rezervatorul.ro/) . This is again caused by `react-qr-reader`.

## About

FoodPrint is a system that uses blockchain technologies to provide transparency in the supply chain of agriculture. This would be realized by connecting the consumer and producer (farmer) virtually. This connection would help the consumers to get an overview of how and when the food item was processed in the chain.

The name FoodPrint is derived from the play of words Foot-print. Just like a foot-print can be used to track and identify a person, our application allows the user (from the consumer side) to track the food item's journey. With a quick scan, the consumer would be able to know the origins of the various ingredients which compose that particular food item.

## Design

This section explains the design decisions that were made and also shows the mockup of the envisioned user interface design.

### Color Palette

![ColorPalette](https://github.com/hKedia/foodprint/blob/master/documentation/palette.png)

* Fresh Green: The very first thing that comes to our mind when we hear about fresh farms is the color 'Green'. The color depicts the essence of the word 'agriculture'.

* Cool Blue: The second thing that we imagine is the sky above the farms. The light shade of blue effectively facilitates the subtle intricacies in the design.

* Tangy Orange: The playful orange color completes the Triad of the color wheel thus forming a harmonic balance of colors. It is utilized for gaining user's attention for action buttons.

* Nearly White: This shade of really light grey is used to form the base foundation for the design elements which will complete the whole design.

* Almost Black: It's a very dark shade of blue used to reduce the sharp contrast of pure black on a light background for the reader.

### Target user persona

The FoodPrint application system would have potentially 3 categories:
1. Consciously aware consumer
2. Intermediary in the supply chain
3. Farmer - The source of raw materials

The following persona captures the feel of the target user class - Consumer

![UserPersona](https://github.com/hKedia/foodprint/blob/master/documentation/persona.png)

### App flow

![AppFlow](https://github.com/hKedia/foodprint/blob/master/documentation/appflow.png)

### Working of the Application

Our application uses a decentralized identity to uniquely identify the users. [Blockstack](https://blockstack.org/) is used for authenticating and login users which gives us a did for the user.

```
decentralizedID: "did:btc-addr:12VogX46bRPFxibHvmXsQS8Dt6xMh4QuTy"
```

The user selects their role: 'consumer' or 'supplier' and logs into the application using Blockstack PKI.

The screencast shows the application flow for the consumer. Once logged in, the consumer can scan the QR Code for a food. A Sample data saved in the QR Code looks like:

```
{
  "ingredient_id": 1004,
  "demand_metric": 0.4,
  "produce_metric": 0.3,
  "transport_cost_metric": 0.6
}
```

![QRCode](https://github.com/hKedia/foodprint/blob/master/documentation/qrcode.png)

Once the data is read, it's passed to the REST endpoint which returns us the relavent details for the food and ingredients it's composed of.

The Consumer can view details about each ingredient including their source. 

### Fair Price Prediction

The app uses [XGBoost](https://xgboost.readthedocs.io/en/latest/) algorithm to determine fair prices across the different commodities, taking into account the seasonality of Crop availability, Market demand, Transportation and Logistics costs involved. This enables customers to see if the farmer has received a fair compensation for the produce and also for the farmer to see the market fair price and adjust accordingly.

The forecast is built accounting for seasonality and stationarity of the prices. Also, the model is robust to handle abnormal price fluctuations. The model was trained and exposed as an AWS Sagemaker endpoint and subsequently exposed as a REST API to be consumed by the Dapp.
