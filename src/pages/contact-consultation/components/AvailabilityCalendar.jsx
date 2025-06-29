import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState('strategic');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const sessionTypes = [
    {
      id: 'strategic',
      name: 'Strategic Overview',
      duration: '45 min',
      description: 'High-level project discussion',
      price: 'Free',
      icon: 'Target'
    },
    {
      id: 'technical',
      name: 'Technical Deep-Dive',
      duration: '60 min',
      description: 'Detailed technical consultation',
      price: 'Free',
      icon: 'Code2'
    },
    {
      id: 'scoping',
      name: 'Project Scoping',
      duration: '90 min',
      description: 'Comprehensive project analysis',
      price: 'Free',
      icon: 'FileText'
    }
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isAvailable = isCurrentMonth && !isPast && !isWeekend;
      
      days.push({
        date: new Date(date),
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        isWeekend,
        isAvailable
      });
    }
    
    return days;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        
        // Mock availability - some slots are booked
        const isBooked = Math.random() < 0.3; // 30% chance of being booked
        
        slots.push({
          time: time.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          }),
          value: `${hour}:${minute.toString().padStart(2, '0')}`,
          isBooked
        });
      }
    }
    
    return slots;
  };

  const calendarDays = generateCalendarDays();
  const timeSlots = generateTimeSlots();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateSelect = (day) => {
    if (day.isAvailable) {
      setSelectedDate(day.date);
      setSelectedTime(null);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedType) {
      console.log('Booking confirmed:', {
        date: selectedDate,
        time: selectedTime,
        type: selectedType
      });
      // Handle booking confirmation
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-elevated p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-3">Schedule Your Consultation</h3>
        <p className="text-text-secondary">
          Choose your preferred date, time, and consultation type.
        </p>
      </div>

      {/* Session Type Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-primary mb-4">Select Consultation Type</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sessionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-4 text-left border-2 rounded-xl transition-all duration-300 ${
                selectedType === type.id
                  ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50 hover:bg-surface'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  selectedType === type.id ? 'bg-accent text-white' : 'bg-surface text-text-muted'
                }`}>
                  <Icon name={type.icon} size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-semibold text-primary">{type.name}</h5>
                    <span className="text-sm font-medium text-accent">{type.price}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-1">{type.description}</p>
                  <span className="text-xs text-text-muted">{type.duration}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-primary">Select Date</h4>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="ChevronLeft"
                onClick={() => navigateMonth(-1)}
              />
              <span className="text-sm font-medium text-primary min-w-[120px] text-center">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <Button
                variant="ghost"
                size="sm"
                iconName="ChevronRight"
                onClick={() => navigateMonth(1)}
              />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="border border-border rounded-lg overflow-hidden">
            {/* Week Headers */}
            <div className="grid grid-cols-7 bg-surface">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-3 text-center text-sm font-medium text-text-secondary">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  disabled={!day.isAvailable}
                  className={`p-3 text-sm border-r border-b border-border last:border-r-0 transition-all duration-200 ${
                    !day.isCurrentMonth
                      ? 'text-text-muted bg-surface/50'
                      : day.isPast || day.isWeekend
                      ? 'text-text-muted cursor-not-allowed'
                      : day.isToday
                      ? 'bg-accent/10 text-accent font-semibold'
                      : selectedDate && selectedDate.getTime() === day.date.getTime()
                      ? 'bg-accent text-white font-semibold' :'text-primary hover:bg-accent/5 cursor-pointer'
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4 text-xs text-text-muted">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-accent rounded"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-accent/10 rounded"></div>
              <span>Today</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-surface rounded"></div>
              <span>Unavailable</span>
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-6">
            Select Time {selectedDate && (
              <span className="text-sm font-normal text-text-secondary">
                for {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            )}
          </h4>

          {selectedDate ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => !slot.isBooked && setSelectedTime(slot.value)}
                    disabled={slot.isBooked}
                    className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      slot.isBooked
                        ? 'border-border bg-surface text-text-muted cursor-not-allowed'
                        : selectedTime === slot.value
                        ? 'border-accent bg-accent text-white' :'border-border text-primary hover:border-accent hover:bg-accent/5'
                    }`}
                  >
                    {slot.isBooked ? (
                      <div className="flex items-center justify-center space-x-1">
                        <Icon name="X" size={12} />
                        <span>{slot.time}</span>
                      </div>
                    ) : (
                      slot.time
                    )}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h5 className="font-semibold text-primary mb-2">Booking Summary</h5>
                  <div className="space-y-1 text-sm text-text-secondary">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium text-primary">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-medium text-primary">
                        {timeSlots.find(slot => slot.value === selectedTime)?.time} PST
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-medium text-primary">
                        {sessionTypes.find(type => type.id === selectedType)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium text-primary">
                        {sessionTypes.find(type => type.id === selectedType)?.duration}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Button
                variant="primary"
                size="lg"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={handleBooking}
                disabled={!selectedTime}
                className="mt-6"
              >
                Confirm Booking
              </Button>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="Calendar" size={48} className="text-text-muted mx-auto mb-4" />
              <p className="text-text-secondary">Please select a date to view available times</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;