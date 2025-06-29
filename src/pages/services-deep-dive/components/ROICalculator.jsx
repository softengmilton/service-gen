import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: '',
    employeeCount: '',
    manualProcessHours: '',
    hourlyRate: '',
    errorRate: '',
    customerAcquisitionCost: '',
    expectedGrowth: '',
    projectCost: ''
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    productivityGain: 0,
    errorReduction: 0,
    revenueIncrease: 0,
    totalBenefit: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const [activeTab, setActiveTab] = useState('inputs');

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(inputs.currentRevenue) || 0;
    const employees = parseFloat(inputs.employeeCount) || 0;
    const manualHours = parseFloat(inputs.manualProcessHours) || 0;
    const hourlyRate = parseFloat(inputs.hourlyRate) || 0;
    const errorRate = parseFloat(inputs.errorRate) || 0;
    const acquisitionCost = parseFloat(inputs.customerAcquisitionCost) || 0;
    const growth = parseFloat(inputs.expectedGrowth) || 0;
    const projectCost = parseFloat(inputs.projectCost) || 0;

    // Calculate annual savings from automation
    const annualManualCost = manualHours * 52 * hourlyRate * employees;
    const automationSavings = annualManualCost * 0.7; // 70% automation efficiency

    // Calculate productivity gains
    const productivityIncrease = (manualHours * 0.5 * hourlyRate * employees * 52);

    // Calculate error reduction savings
    const errorCost = revenue * (errorRate / 100) * 0.1; // 10% of revenue lost due to errors
    const errorSavings = errorCost * 0.8; // 80% error reduction

    // Calculate revenue increase from improved efficiency
    const revenueBoost = revenue * (growth / 100);

    const totalAnnualBenefit = automationSavings + productivityIncrease + errorSavings + revenueBoost;
    const roiPercentage = projectCost > 0 ? ((totalAnnualBenefit - projectCost) / projectCost) * 100 : 0;
    const payback = projectCost > 0 ? projectCost / (totalAnnualBenefit / 12) : 0;

    setResults({
      annualSavings: automationSavings,
      productivityGain: productivityIncrease,
      errorReduction: errorSavings,
      revenueIncrease: revenueBoost,
      totalBenefit: totalAnnualBenefit,
      roi: roiPercentage,
      paybackPeriod: payback
    });

    setActiveTab('results');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  const inputFields = [
    {
      key: 'currentRevenue',
      label: 'Annual Revenue',
      placeholder: '1000000',
      icon: 'DollarSign',
      description: 'Your current annual revenue'
    },
    {
      key: 'employeeCount',
      label: 'Number of Employees',
      placeholder: '50',
      icon: 'Users',
      description: 'Total number of employees'
    },
    {
      key: 'manualProcessHours',
      label: 'Manual Process Hours/Week',
      placeholder: '20',
      icon: 'Clock',
      description: 'Hours spent on manual processes per employee per week'
    },
    {
      key: 'hourlyRate',
      label: 'Average Hourly Rate',
      placeholder: '50',
      icon: 'DollarSign',
      description: 'Average hourly cost per employee'
    },
    {
      key: 'errorRate',
      label: 'Current Error Rate (%)',
      placeholder: '5',
      icon: 'AlertTriangle',
      description: 'Percentage of processes that result in errors'
    },
    {
      key: 'customerAcquisitionCost',
      label: 'Customer Acquisition Cost',
      placeholder: '500',
      icon: 'Target',
      description: 'Cost to acquire a new customer'
    },
    {
      key: 'expectedGrowth',
      label: 'Expected Growth (%)',
      placeholder: '15',
      icon: 'TrendingUp',
      description: 'Expected revenue growth from digital transformation'
    },
    {
      key: 'projectCost',
      label: 'Project Investment',
      placeholder: '100000',
      icon: 'CreditCard',
      description: 'Total cost of the digital transformation project'
    }
  ];

  const benefitCards = [
    {
      title: 'Annual Cost Savings',
      value: results.annualSavings,
      icon: 'PiggyBank',
      color: 'success',
      description: 'Savings from process automation'
    },
    {
      title: 'Productivity Gains',
      value: results.productivityGain,
      icon: 'Zap',
      color: 'accent',
      description: 'Value from increased efficiency'
    },
    {
      title: 'Error Reduction',
      value: results.errorReduction,
      icon: 'Shield',
      color: 'warning',
      description: 'Savings from reduced errors'
    },
    {
      title: 'Revenue Increase',
      value: results.revenueIncrease,
      icon: 'TrendingUp',
      color: 'primary',
      description: 'Additional revenue from growth'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'bg-success/10 text-success border-success/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
      warning: 'bg-warning/10 text-warning border-warning/20',
      primary: 'bg-primary/10 text-primary border-primary/20'
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calculator" size={16} />
            <span>ROI Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Calculate Your Investment Return
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the potential financial impact of your digital transformation project with our interactive ROI calculator.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab('inputs')}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === 'inputs' ?'bg-accent text-white' :'text-text-secondary hover:text-primary hover:bg-surface'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Settings" size={18} />
                <span>Input Parameters</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === 'results' ?'bg-accent text-white' :'text-text-secondary hover:text-primary hover:bg-surface'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon name="BarChart3" size={18} />
                <span>ROI Results</span>
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12">
            {/* Inputs Tab */}
            {activeTab === 'inputs' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Enter Your Business Parameters</h3>
                  <p className="text-text-secondary">
                    Provide information about your current business to calculate potential ROI
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {inputFields.map((field) => (
                    <div key={field.key} className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-primary">
                        <Icon name={field.icon} size={16} className="text-accent" />
                        <span>{field.label}</span>
                      </label>
                      <Input
                        type="number"
                        placeholder={field.placeholder}
                        value={inputs[field.key]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        className="w-full"
                      />
                      <p className="text-xs text-text-muted">{field.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button
                    variant="primary"
                    size="lg"
                    iconName="Calculator"
                    iconPosition="left"
                    onClick={calculateROI}
                    className="bg-accent hover:bg-accent-600"
                  >
                    Calculate ROI
                  </Button>
                </div>
              </div>
            )}

            {/* Results Tab */}
            {activeTab === 'results' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Your ROI Analysis</h3>
                  <p className="text-text-secondary">
                    Based on your inputs, here's the projected return on investment
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-xl border border-success/20">
                    <Icon name="TrendingUp" size={32} className="text-success mx-auto mb-3" />
                    <div className="text-3xl font-bold text-success mb-1">
                      {formatPercentage(results.roi)}
                    </div>
                    <div className="text-sm text-text-secondary">Annual ROI</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                    <Icon name="Clock" size={32} className="text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-accent mb-1">
                      {results.paybackPeriod.toFixed(1)}
                    </div>
                    <div className="text-sm text-text-secondary">Months to Payback</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <Icon name="DollarSign" size={32} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">
                      {formatCurrency(results.totalBenefit)}
                    </div>
                    <div className="text-sm text-text-secondary">Total Annual Benefit</div>
                  </div>
                </div>

                {/* Benefit Breakdown */}
                <div className="grid md:grid-cols-2 gap-6">
                  {benefitCards.map((card, index) => (
                    <div key={index} className={`p-6 rounded-xl border ${getColorClasses(card.color)}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(card.color)}`}>
                          <Icon name={card.icon} size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{card.title}</h4>
                          <p className="text-sm text-text-muted">{card.description}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {formatCurrency(card.value)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ROI Chart Visualization */}
                <div className="bg-surface rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                    <Icon name="BarChart3" size={18} className="text-accent" />
                    <span>5-Year Projection</span>
                  </h4>
                  
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((year) => {
                      const yearlyBenefit = results.totalBenefit * year;
                      const cumulativeROI = ((yearlyBenefit - parseFloat(inputs.projectCost || 0)) / parseFloat(inputs.projectCost || 1)) * 100;
                      
                      return (
                        <div key={year} className="flex items-center space-x-4">
                          <div className="w-16 text-sm font-medium text-text-secondary">
                            Year {year}
                          </div>
                          <div className="flex-1 bg-border rounded-full h-3 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent to-success transition-all duration-1000"
                              style={{ width: `${Math.min(100, (cumulativeROI / 500) * 100)}%` }}
                            ></div>
                          </div>
                          <div className="w-24 text-sm font-medium text-primary text-right">
                            {formatCurrency(yearlyBenefit)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Button
                    variant="primary"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-accent hover:bg-accent-600"
                  >
                    Discuss Results
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    className="border border-border"
                  >
                    Download Report
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={() => setActiveTab('inputs')}
                    className="border border-border"
                  >
                    Recalculate
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
            <p className="text-text-secondary">
              <Icon name="Info" size={16} className="inline mr-2 text-accent" />
              These calculations are estimates based on industry averages and your inputs. 
              Actual results may vary based on implementation and business factors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;