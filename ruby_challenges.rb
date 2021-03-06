# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike
    # initialize class
    def initialize (model, frame_size)
        @model = model
        @frame_size = frame_size
        @wheels = 2
    end
    
    def start_bike
        "The #{@model} bike has #{@wheels} wheels and a #{@frame_size}cm frame"
    end
end

my_bike_info = Bike.new 'Trek', 168
puts my_bike_info.start_bike

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

class Bike
    def ring_bell
        "Ding, ding, ding"
    end
end

puts my_bike_info.ring_bell


# Expected output example: my_bike.ring_bell => 'Ding ding!'

# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.
class Bike
    def speedometer
        @speed = 0
    end
end

puts my_bike_info.speedometer


# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.
class Bike
    def pedal_faster x
        @speed += x
    end
end


puts my_bike_info.pedal_faster 10


# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.
class Bike
    def brake_now x
        if @speed < x
            @speed = 0
        else
            @speed -= x
        end
    end
end

puts my_bike_info.brake_now 15


# Expected output example: my_bike.brake 15 => 0
