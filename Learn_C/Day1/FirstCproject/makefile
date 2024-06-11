CC = gcc
CFLAGS = -Wall -Wextra -pedantic -std=c11
RC = windres

SRC_DIR = src
BUILD_DIR = bin

SRCS := $(wildcard $(SRC_DIR)/*.c)
OBJS := $(SRCS:$(SRC_DIR)/%.c=$(BUILD_DIR)/%.o)

all: $(BUILD_DIR)/app.exe

$(BUILD_DIR)/app.exe: $(OBJS) $(SRC_DIR)/resource.res
    $(CC) $(CFLAGS) $^ -o $@

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c
    $(CC) $(CFLAGS) -c $< -o $@

$(SRC_DIR)/resource.res: $(SRC_DIR)/resource.rc
    $(RC) -O coff $< $@

clean:
    $(RM) $(BUILD_DIR)/*.o $(BUILD_DIR)/*.exe $(SRC_DIR)/*.res
