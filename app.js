// https://calculator.swiftutors.com/cost-per-visit-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerVisitRadio = document.getElementById('costPerVisitRadio');
const campaignCostRadio = document.getElementById('campaignCostRadio');
const numberofVisitorsRadio = document.getElementById('numberofVisitorsRadio');

let costPerVisit;
let campaignCost = v1;
let numberofVisitors = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costPerVisitRadio.addEventListener('click', function() {
  variable1.textContent = 'Campaign Cost ($)';
  variable2.textContent = 'Number of Visitors';
  campaignCost = v1;
  numberofVisitors = v2;
  result.textContent = '';
});

campaignCostRadio.addEventListener('click', function() {
  variable1.textContent = '(CPV) Cost Per Visit ($)';
  variable2.textContent = 'Number of Visitors';
  costPerVisit = v1;
  numberofVisitors = v2;
  result.textContent = '';
});

numberofVisitorsRadio.addEventListener('click', function() {
  variable1.textContent = '(CPV) Cost Per Visit ($)';
  variable2.textContent = 'Campaign Cost ($)';
  costPerVisit = v1;
  campaignCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerVisitRadio.checked)
    result.textContent = `Cost Per Visit = ${computeCostPerVisit().toFixed(2)} $`;

  else if(campaignCostRadio.checked)
    result.textContent = `Campaign Cost = ${computeCampaignCost().toFixed(2)} $`;

  else if(numberofVisitorsRadio.checked)
    result.textContent = `Number of Visitors = ${computeNumberofVisitors().toFixed(2)}`;
})

// calculation

function computeCostPerVisit() {
  return Number(campaignCost.value) / Number(numberofVisitors.value);
}

function computeCampaignCost() {
  return Number(costPerVisit.value) * Number(numberofVisitors.value);
}

function computeNumberofVisitors() {
  return Number(campaignCost.value) / Number(costPerVisit.value);
}